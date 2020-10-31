import { Request, Response } from "express";
import FormatAllRoomsObtainsForUser from "../../application/features/Room/FormatAllRoomsObtainsForUser";
import GetAllRoomsByUser from "../../application/features/Room/GetAllRoomsByUser";

export default async (req : Request, res : Response) => {
  try {
    const { userId } = req.body;
    const rooms = await new GetAllRoomsByUser().exec(userId);

    if(rooms?.length){
      const roomList = await new FormatAllRoomsObtainsForUser().exec(rooms);
      res.status(200).json({ roomList });
    }

    res.status(200).json({ roomList : [] });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}