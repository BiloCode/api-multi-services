import { Request, Response } from "express";
import GetNearestWorker from "../../../application/repository/Worker/GetNearestWorker";

export default async function (req : Request, res : Response) {
  try {
    const { districtId } = req.body;

    const workers = await new GetNearestWorker().run(districtId);

    res.status(200).json({ workers });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}