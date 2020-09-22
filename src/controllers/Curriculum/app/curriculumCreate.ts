import { Request, Response } from "express";
import CurriculumCreate from "../../../application/services/Curriculum/CurriculumCreate";

export default async function (req : Request, res : Response) {
  try {
    const { userId , specialtyId , title , content } = req.body;
    const send = await new CurriculumCreate().run({
      userId,
      specialtyId,
      title,
      content
    });

    res.status(200).json({ send });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}