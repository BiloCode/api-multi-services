import { Request, Response } from "express";
import GetNearestWorker from "../../../application/features/Worker/GetNearestWorker";

export default async function (req : Request, res : Response) {
  try {
    const { provinceId } = req.body;

    const limit : number = 8;
    const workers = await new GetNearestWorker().exec(provinceId, limit);

    res.status(200).json({ workers });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}