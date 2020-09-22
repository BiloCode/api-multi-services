import { Request, Response } from "express";
import AdminAuthentication from "../../../application/services/Admin/AdminAuthentication";
import TokenCreate from "../../../application/services/Token/TokenCreate";

export default async function( req : Request, res : Response ) {
  try{
    const { username , password } = req.body;
    const admin = await new AdminAuthentication().check(username,password);
    if( admin ){
      const token = await new TokenCreate().run(admin);
      res.status(200).json({ token });
      return;
    }
    
    res.status(200).json({ token : null });
  } catch (e) {
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}