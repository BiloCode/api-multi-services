import { Request, Response } from "express";
import FindWorkerBySpecialty from "../../../application/features/Worker/FindWorkerBySpecialty";

export default async (req : Request, res : Response) => {
  try {
    const { specialtyId , provinceId } = req.body;
    const workers = await new FindWorkerBySpecialty().exec(specialtyId, provinceId);

    res.status(200).json({ workers });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message })
  }
}