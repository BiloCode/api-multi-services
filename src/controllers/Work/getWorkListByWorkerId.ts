import { Request, Response } from "express";
import GetWorkListByWorkerId from "../../application/features/WorkDetail/GetWorkListByWorkerId";

export default async (req : Request, res : Response) => {
  try {
    const { workerId } = req.body;
    const works = await new GetWorkListByWorkerId().exec(workerId);

    res.status(200).json({ works });
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}