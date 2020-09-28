import { Request, Response } from "express";
import GetDepartments from "../../application/repository/Department/GetDepartments";

export default async (req : Request, res : Response) => {
  try {
    const deparments = await new GetDepartments().exec();
    res.status(200).json({ deparments });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}