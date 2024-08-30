import { Router } from "express";
import HistoryModel from "../../models/HistoryModel";
import UserModel from "../../models/UserModel";

const ImageRouter = Router()

ImageRouter.post("/upload", async (req: any, res: any) => {
  try {
    
  } catch (err) {
    res.status(500).json({ err: err })
  }
})

export default ImageRouter