import { Response , Request } from "express";
import WorkStateWithUser from "../../../application/features/Worker/WorkStateWithUser";

export default async (req : Request , res : Response) => {
  try{
    const { userId, workerId } = req.body;
    const work = await new WorkStateWithUser().exec(userId, workerId);
    
    res.status(200).json({ work });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}