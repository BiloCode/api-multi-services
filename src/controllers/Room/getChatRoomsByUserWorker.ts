import { Request, Response } from "express";
import FormatAllRoomsObtainsForWorker from "../../application/features/Room/FormatAllRoomsObtainsForWorker";
import GetAllRoomsByUserWorker from "../../application/features/Room/GetAllRoomsByUserWorker";

export default async (req : Request, res : Response) => {
  try {
    const { userId } = req.body;
    const rooms = await new GetAllRoomsByUserWorker().exec(userId);

    if(rooms?.length){
      const roomList = await new FormatAllRoomsObtainsForWorker().exec(rooms);
      res.status(200).json({ roomList });
    }

    res.status(200).json({ roomList : [] });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}