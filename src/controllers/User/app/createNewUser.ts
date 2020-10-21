import { Request, Response } from "express";
import UserCreate from "../../../application/features/User/UserCreate";

export default async (req : Request, res : Response) => {
  try {
    const { fullName , username, password, districtId } = req.body;
    const isRegister = await new UserCreate().exec({
      fullName,
      username,
      password,
      districtId : parseInt(districtId)
    });

    res.status(200).json({ isRegister });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}