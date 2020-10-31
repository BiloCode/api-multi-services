import { Request, Response } from "express";
import GetWorkById from "../../../application/features/WorkDetail/GetWorkById";
import WorkCompleted from "../../../application/features/WorkDetail/WorkCompleted";

export default async (req : Request, res : Response) => {
  try {
    const { workId } = req.body;
    const isCompleted = await new WorkCompleted().exec(workId);

    if(!isCompleted){
      //const work = await new GetWorkById().exec(workId);
      //res.status(200).json({ work });
      res.status(200).json({ error : 'No se pudo terminar el trabajo' });
    }

    res.status(200).json({ isCompleted });
  }catch(e){
    res.status(500).json({ error : e.message });
  }
}