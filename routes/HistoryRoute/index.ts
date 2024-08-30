import { Router } from "express";
import UserModel from "../../models/UserModel";

const historyRouter = Router();

historyRouter.post("/", async (req: any, res: any) => {
  try {
    const socialsData = await UserModel.findOne({ email: req.body.email });
    if (socialsData) {
      const result = socialsData.socials.filter(item => item.status != 0)
      res.status(200).json({email:socialsData.email, socials:result});
    } else {
      res.status(200).json({ error: "Email not Found" });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

historyRouter.post("/add", async (req: any, res: any) => {
  try {
    const socialsData = await UserModel.findOne({ email: req.body.email });
    if (socialsData) {
      let flag = false
      console.log("length", socialsData.socials.length)
      for (let i = 0; i < socialsData.socials.length; i++) {
        if (socialsData.socials[i].platform == req.body.platform && socialsData.socials[i].links == req.body.link) {
          const now = new Date();
          const currentYear = now.getFullYear();
          const currentMonth = now.getMonth() + 1;
          const currentDay = now.getDate();
          const currentHour = now.getHours();
          const currentMinute = now.getMinutes();
          const currentSecond = now.getSeconds();
          const prefix = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000
          const order = `${currentYear}${currentMonth}${currentDay}${currentHour}${currentMinute}${currentSecond}-${prefix}`

          socialsData.socials[i]['status'] = 1
          socialsData.socials[i]['orderNumber'] = order
          socialsData.socials[i]['date'] = req.body.date
          socialsData.socials[i]['cnt'] = req.body.cnt

          flag = true
          break
        }
      }

      if (flag) {
        await UserModel.updateOne(
          { _id: socialsData._id },
          { socials: socialsData.socials }
        );

      } else {
        // 
      }
      console.log("success")
      res.json({ msg: "Success" });
    } else {
      console.log("No email");
      res.status(404).json({ error: "Unregistered email" });
    }
  } catch (err) {
    res.status(500).json({ err: err });
  }
});

export default historyRouter;
