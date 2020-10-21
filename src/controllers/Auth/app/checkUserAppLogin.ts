import { Request, Response } from "express";
import TokenCreate from "../../../application/features/Token/TokenCreate";
import UserAppAuthentication from "../../../application/features/User/UserAppAuthentication";
import FindWorkerById from "../../../application/features/Worker/FindWorkerById";

export default async function (req : Request, res : Response) {
  try{
    const { username , password } = req.body;

    const user = await new UserAppAuthentication().exec(username,password);
    if(user) {
      const token = new TokenCreate().run({
        id : user.id,
        createdAt : new Date()
      });

      if(token) {
        const worker = await new FindWorkerById().find(user.id);

        if(!worker)
          res.status(200).json({ token , user });

        res.status(200).json({ token , worker });
      }  
    }

    res.status(200).json({ token : null });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}