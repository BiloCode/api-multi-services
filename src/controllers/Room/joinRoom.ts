import { Request, Response } from "express";
import CreateRoom from "../../application/features/Room/CreateRoom";
import GetRoomByUsers from "../../application/features/Room/GetRoomByUsers";

export default async (req : Request, res : Response) => {
  try {
    const { userWorkerId, userId } = req.body;

    let room = await new GetRoomByUsers().exec(userWorkerId, userId);
    if(!room) {
      room = await new CreateRoom().exec(userWorkerId, userId);
    }

    res.status(200).json({ room });
  }catch(e){
    console.log(e);
  }
}