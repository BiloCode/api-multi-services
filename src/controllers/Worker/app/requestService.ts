import { Request, Response } from "express";
import CreateWorkDetail from "../../../application/features/WorkDetail/CreateWorkDetail";

export default async (req : Request, res : Response) => {
  try {
    const { userId , workerId , title, price, description } = req.body;

    const isWorkCreate = await new CreateWorkDetail().exec({ 
      userId,
      workerId,
      title,
      price,
      description 
    });

    res.status(200).json({ isWorkCreate });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}