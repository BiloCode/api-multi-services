import { Request, Response } from "express";
import FindUserById from "../../application/repository/User/FindUserById";

export default async function (req : Request, res : Response) {
  try {
    const { id } = req.params;
    const user = await new FindUserById().exec(parseInt(id));

    res.status(200).json({
      user
    });
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}