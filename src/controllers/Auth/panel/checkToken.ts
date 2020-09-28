import { Request, Response } from "express";
import GetFormattedToken from "../../../application/repository/Token/GetFormattedToken";
import TokenIsExpired from "../../../application/repository/Token/TokenValidate";

export default function(req : Request, res : Response) {
  try{
    const { token } = req.body;

    if(!token){
      res.status(200).json({ message : 'Request incorrect format' });
    }
      
    const tokenFormat = new GetFormattedToken().exec(token);
    const isExpired = new TokenIsExpired().exec(tokenFormat);

    res.status(202).json({ isExpired });
  }catch(e){
    console.log(e);
    res.status(400).json({ error : e });
  }
}