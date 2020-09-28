import { Request, Response } from "express";
import GetRoomByUser from "../../../application/repository/Room/GetRoomByUser";

export const Handler = async (req : Request, res : Response) => {
  try {
    const { userId } = req.body;
    const room = await new GetRoomByUser().exec(userId);

    res.status(200).json({ room });
  }catch(e){
    console.log(e);
  }
}