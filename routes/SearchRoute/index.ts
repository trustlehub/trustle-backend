import { Router } from "express";
import UserModel from "../../models/UserModel";

const SearchRouter = Router()


SearchRouter.post("/search", async (req: any, res: any) => {
  try {
    console.log('search')
    const history = await UserModel.findOne({ email: req.body.email })
    if (history) {
      if (history.credit == 0) {
        console.log("No credit")
        res.status(404).json({err:'No credit'})
      }
      const new_credit = history.credit - 1
      console.log('history.credit',history.credit)
      console.log("credit: " + history.credit + '-->' + new_credit)
      await UserModel.updateOne({ email: req.body.email }, { credit: new_credit })
      console.log(history)
      res.status(200).json({ credit: new_credit });
    } else {
      console.log("No email")
      res.status(200).json({ error: "Email not Found" })
    }
  } catch (err) {
    res.status(500).json({ err: err })
  }
})

export default SearchRouter