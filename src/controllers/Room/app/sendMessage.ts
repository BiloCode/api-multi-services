import { Request, Response } from "express";
import SendMessage from "../../../application/repository/Room/SendMessage";

export const Handler = async (req : Request, res : Response) => {
  try {
    const { roomId , userId , message } = req.body;
    const isSend = await new SendMessage().exec(roomId, { message , userId });

    res.status(200).json({ isSend });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}