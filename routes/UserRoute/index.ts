import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { Router } from "express";
import jwt from "jsonwebtoken";
import VerifyEmail from "../../mailSend/emailTemplete/verify";
const crypto = require("crypto-js");
import { isLoggedIn as verifyToken } from "../../middleware/IsUserLoggedIn";
import UserModel from "../../models/UserModel";
const sgMail = require("@sendgrid/mail");
dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API);

// Create a new router instance
const UserRouter = Router();

/**
 * Handles user signup by checking if the same data already exist
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
UserRouter.post("/sign", async (req: any, res: any) => {
  try {
    // Check if the same name or email already exists in the database
    const validation = await UserModel.findOne({
      $or: [{ email: req.body.email }],
    });

    if (validation?.verification) {
      // If duplicate data found, respond with a conflict status
      let currentCnt = validation.cnt > -1 ? validation.cnt : 0;
      let accept;
      // If the user has accept terms, change accept to true.
      if (validation.accept) {
        accept = true;
      }
      if (!validation.status) {
        const newStatus = true;
        currentCnt++;
      }
      await UserModel.updateOne(
        { email: req.body.email },
        { cnt: currentCnt, accept: accept }
      );
      res.status(200).json({
        msg: "User loggedin",
        data: {
          credit: validation.credit,
          accept: validation.accept,
          verify: validation.verification,
        },
      });
    } else if (!validation) {
      // Encrypt the user password before saving
      req.body.password = await bcrypt.hash(req.body.password, 10);

      const code = Math.floor(Math.random() * 10000);

      req.body.verification = false;
      req.body.verifyCode = code;

      const data = crypto.AES.encrypt(req.body.email, process.env.VERYFI_KEY); // Encryption Part

      const email = VerifyEmail({
        mail: req.body.email,
        code: data.toString(),
        name: req.body.name,
        number: code,
      });

      const msg = {
        // to: "hugo.rogers.16@gmail.com",
        // to: "oliver.b25.f@gmail.com",
        to: req.body.email,
        from: "support@trustle-beta.com",
        subject: "Trustle Notification - Verify your account",
        html: email,
      };

      sgMail
        .send(msg)
        .then(() => {
          console.log("Email sent successfully");
        })
        .catch((error: any) => {
          console.error("Error sending email", error);
        });

      // Create a new user instance with the provided data
      const newUser = new UserModel(req.body);

      // Save the new user to the database
      let result = await newUser.save();
      console.log("new users")
      if (result) {
        // If user saved successfully, respond with success status
        // res.status(200).json({
        //   signup: true,
        // });
        res.status(200).json({
          verify: true,
          url: data.toString(),
        });
      } else {
        // If user save failed, respond with bad request status
        res.status(400).json({ error: "Failed to sign up" });
      }
    } else if (!validation.verification) {
      const data = crypto.AES.encrypt(req.body.email, process.env.VERYFI_KEY);
      console.log("invalid",validation.verification)
      res.status(200).json({
        verify: true,
        url: data.toString(),
      });
    }
  } catch (err) {
    // Handle server errors
    console.warn(`Error: ${err}`);
    res.status(500).json({ error: err });
  }
});

UserRouter.post("/logout", async (req: any, res: any) => {
  try {
    // Check if the same name or email already exists in the database
    const validation = await UserModel.findOne({
      $or: [{ email: req.body.email }],
    });

    if (validation) {
      // If duplicate data found, respond with a conflict status
      await validation.updateOne({ email: req.body.email }, { status: false });
      res.status(200).json({ msg: "User loggedout" });
    } else {
      res.status(404).json({ msg: "Failed to logged out" });
    }
  } catch (err) {
    // Handle server errors
    console.warn(`Error: ${err}`);
    res.status(500).json({ error: err });
  }
});

/**
 * Handles user login by validating provided credentials and generating a JWT token upon successful authentication.
 * @param {Object} req - Express request object containing user input data.
 * @param {Object} res - Express response object for sending HTTP responses.
 */
UserRouter.post("/login", async (req: any, res: any) => {
  // Extract email and password from the request body
  const email = req.body.email;
  const password = req.body.password;

  try {
    // Find a user with the provided email in the UserModel
    const result = await UserModel.findOne({ email: email });

    // If a user with the email exists
    if (result != null) {
      // Compare the provided password with the stored password hash
      if (!(await bcrypt.compare(password, result.password as string))) {
        console.log("Password incorrect");
        res.status(403).json({ error: "Password incorrect" });
      } else {
        // Generate a JWT token for successful login
        const token = jwt.sign(
          { id: result._id.toString() },
          process.env.SECRET_KEY || "",
          { expiresIn: "600000" }
        );
        console.log("User logged in successfully");
        res.status(200).json({ msg: "Login success", token: token });
      }
    } else {
      // If no user is found with the given email
      console.log(`${result} : User not found`);
      res.status(404).json({ error: "User not found" });
    }
  } catch (err) {
    // Handle server errors by logging and sending an appropriate response
    console.warn(`error: ${err}`);
    res.status(500).json({ error: err });
  }
});

// Endpoint for verifying a token (for testing purposes only)
UserRouter.post("/verify", async (req: any, res: any) => {
  const decrypted = crypto.AES.decrypt(
    req.body.url,
    process.env.VERYFI_KEY
  ).toString(crypto.enc.Utf8);

  const validation = await UserModel.findOne({
    $or: [{ email: decrypted }],
  });

  if (validation) {
    if (
      validation.verifyCode?.toString() === req.body.code &&
      !validation.verification
    ) {
      res.status(200).json();
      await UserModel.updateOne(
        { email: decrypted },
        { verification: true, verifyCode: 0 }
      );
    }
  }
});

UserRouter.post("/regenerate", async (req: any, res: any) => {
  const code = Math.floor(Math.random() * 10000);
  const data = crypto.AES.encrypt(req.body.email, process.env.VERYFI_KEY); // Encryption Part

  const email = VerifyEmail({
    mail: req.body.email,
    code: data.toString(),
    name: req.body.name,
    number: code,
  });

  const msg = {
    // to: "hugo.rogers.16@gmail.com",
    to: "oliver.b25.f@gmail.com",
    // to: req.body.email,
    from: "support@trustle-beta.com",
    subject: "Trustle",
    html: email,
  };

  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error: any) => {
      console.error("Error sending email", error);
    });

  const response = await UserModel.updateOne(
    { email: req.body.email },
    { verifyCode: code }
  );
  if (response) {
    res.status(200).json({ code: code });
  }
});

// Endpoint for admin login (for testing purposes only)
// UserRouter.post("/admin", verifyToken, async (req: any, res: any) => {
UserRouter.post("/admin", async (req: any, res: any) => {
  // Extract email and password from the request body
  const email = req.body.email;
  const pwd = req.body.pwd;

  try {
    // Find a user with the provided email and password
    const user = await UserModel.findOne({ email: email, password: pwd });

    // Check if user exists and has admin privileges
    if (user && user.admin) {
      // Generate a JWT token for successful admin login
      const token = jwt.sign(
        { id: user._id.toString() },
        process.env.SECRET_KEY || "",
        { expiresIn: "600000" }
      );
      console.log("User logged in as admin successfully");
      res.status(200).json({ msg: "Login success as admin", token: token });
    } else {
      console.warn(`${user} : No permissions`);
      res.status(403).json({ error: "No permissions" });
    }
  } catch (err) {
    // Handle server errors by logging and sending an appropriate response
    console.warn(`error: ${err}`);
    res.status(500).json({ error: err });
  }
});

// Endpoint for accept tearms
UserRouter.post("/accept", async (req: any, res: any) => {
  try {
    // Find user
    const user = await UserModel.findOne({
      email: req.body.email,
      accept: false,
    });

    if (user) {
      await UserModel.updateOne({ email: req.body.email }, { accept: true });
      res.send();
    }
  } catch (error) {}
});

// Export the router instance for use in other parts of the application
export default UserRouter;
