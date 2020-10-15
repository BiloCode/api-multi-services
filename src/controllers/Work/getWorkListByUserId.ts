import { Request, Response } from "express";
import GetWorkListByUserId from "../../application/features/WorkDetail/GetWorkListByUserId";

export default async (req : Request, res : Response) => {
  try {
    const { userId } = req.body;
    const works = await new GetWorkListByUserId().exec(userId);

    res.status(200).json({ works });
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}