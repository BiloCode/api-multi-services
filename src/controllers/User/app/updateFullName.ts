import { Request, Response } from "express";
import UpdateFullName from "../../../application/features/User/UserUpdateFullName";

export default async (req : Request , res : Response) => {
  try {
    const { userId , fullName } = req.body;
    const isUpdated = await new UpdateFullName().exec(userId, fullName);

    res.status(200).json({ isUpdated });
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}