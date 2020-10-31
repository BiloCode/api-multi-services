import { Request, Response } from "express";
import GetNearestWorker from "../../../application/features/Worker/GetNearestWorker";

export default async (req : Request, res : Response) => {
  try {
    const { provinceId } = req.body;

    const workers = await new GetNearestWorker().exec(provinceId);

    res.status(200).json({ workers });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message : e.error })
  }
}