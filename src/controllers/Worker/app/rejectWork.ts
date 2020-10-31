import { Request, Response } from "express";
import UpdateWorkDetailState from "../../../application/features/WorkDetail/UpdateWorkDetailState";

export default async (req : Request, res : Response) => {
  try { 
    const { workId } = req.body;
    const isReject = await new UpdateWorkDetailState().exec(workId, 'reject');

    res.status(200).json({ isReject });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}