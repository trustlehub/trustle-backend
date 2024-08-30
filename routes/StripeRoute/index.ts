import { response, Router } from "express";
import Invoice from "../../mailSend/emailTemplete/invoice";
import StripeModel from "../../models/StripeModel";

const sgMail = require("@sendgrid/mail");
const stripe = require("stripe")(process.env.STRIPE_API);

// Create a new router instance
const stripeRouter = Router();

const formatDate = (dateString: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Date(dateString).toLocaleString("en-US", options);
};

stripeRouter.post("/create-payment-intent", async (req, res) => {
  const transaction = new StripeModel(req.body);
  transaction.date = new Date();

  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  // transaction.paymentId = paymentIntent.id;
  transaction.paymentId = paymentIntent.id.split("_")[1];

  const respone = await transaction.save();

  res.send({
    clientSecred: paymentIntent.client_secret,
    intentId: paymentIntent.id,
    id: respone._id,
  });
});

stripeRouter.post("/create-verification-session", async (req, res) => {
  console.log("HIHIHIHIHI");
  const verificationSession = await stripe.identity.verificationSessions.create(
    {
      type: "document",
    }
  );
  console.log("idverify response", verificationSession);
  res.status(200).json(verificationSession.client_secret);
});

stripeRouter.post("/cancel", async (req, res) => {
  await stripe.paymentIntents.cancel(req.body.id);
  const response = await StripeModel.deleteOne({ _id: req.body.dbId });
  res.send();
});

stripeRouter.post("/verify", async (req, res) => {
  const payment = await StripeModel.find({ email: req.body.email });
  const data = payment[payment.length - 1];
  let date;
  if (data.date) {
    date = formatDate(data.date);
  }
  if (data.amount) {
    const email = Invoice({
      name: req.body.name,
      id: data.paymentId,
      total: (data.amount / 100).toFixed(2),
      date: date,
      count: req.body.count,
      tax: ((data.amount - 100 - req.body.count * 100) / 100).toFixed(2),
    });

    const msg = {
      // to: "oliver.b25.f@gmail.com",
      to: req.body.email,
      from: "support@trustle-beta.com",
      subject: "Trustle",
      html: email,
    };
    try {
      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent successfully");
        })
        .catch((error: any) => {
          console.error("Error sending email", error);
        });
    } catch (error) {
      console.log("Mail Error", error);
    }
  }

  res.status(200).json();
});

export default stripeRouter;
