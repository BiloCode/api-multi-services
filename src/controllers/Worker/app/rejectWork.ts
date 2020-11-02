import { Request, Response } from "express";
import GetWorkById from "../../../application/features/WorkDetail/GetWorkById";
import UpdateWorkDetailState from "../../../application/features/WorkDetail/UpdateWorkDetailState";

export default async (req : Request, res : Response) => {
  try { 
    const { workId } = req.body;
    const isUpdated = await new UpdateWorkDetailState().exec(workId, 'reject');
    if(isUpdated){
      const work = await new GetWorkById().exec(workId);
      res.status(200).json({ work });
    }

    res.status(200).json({ error : 'No se pudo aceptar el trabajo.' });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}