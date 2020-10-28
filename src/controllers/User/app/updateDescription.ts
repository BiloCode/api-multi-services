import { Request, Response } from "express";
import UpdateDescription from "../../../application/features/User/UserUpdateDescription";

export default async (req : Request , res : Response) => {
  try {
    const { userId , description } = req.body;
    const isUpdated = await new UpdateDescription().exec(userId, description);

    res.status(200).json({ isUpdated });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}