import { Request, Response } from "express";
import FindWorkerByName from "../../../application/features/Worker/FindWorkerByName";

export default async (req : Request, res : Response) => {
  try {
    const { name , provinceId } = req.body;
    const workers = await new FindWorkerByName().exec(name, provinceId);

    res.status(200).json({ workers });
  }catch(e) {
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}