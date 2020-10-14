import { Request, Response } from "express";
import GetSpecialties from "../../application/features/GetSpecialties";

export default async function(req : Request , res : Response) {
  try {
    const specialty = await new GetSpecialties().find();
    res.status(200).json({ specialty });
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}