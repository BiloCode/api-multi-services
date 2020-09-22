import { Response , Request } from "express";
import FindWorkerById from "../../../application/services/Worker/FindWorkerById";

export default async function(req : Request , res : Response) {
  try{
    const { id } = req.params;
    const worker = await new FindWorkerById().find(parseInt(id));

    res.status(200).json({ worker });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}