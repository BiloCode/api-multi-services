import { Request, Response } from "express";
import GetFormattedToken from "../../../application/services/Token/GetFormattedToken";
import TokenDecode from "../../../application/services/Token/TokenDecode";
import TokenIsExpired from "../../../application/services/Token/TokenValidate";
import FindUserById from "../../../application/services/User/FindUserById";
import FindWorkerById from "../../../application/services/Worker/FindWorkerById";

export default async function(req : Request, res : Response) {
  try{
    const { token } = req.body;

    if(!token)
      res.status(500).json({ error : 'Incorrect Format' })
      
    const tokenFormat = new GetFormattedToken().exec(token);
    const isExpired = new TokenIsExpired().exec(tokenFormat);
    
    if(!isExpired) {
      const tokenDecode = new TokenDecode().exec(tokenFormat);  
      const worker = await new FindWorkerById().find(tokenDecode.data.id);

      if(!worker){
        const user = await new FindUserById().exec(tokenDecode.data.id);
        res.status(202).json({ isExpired, user });
      }

      res.status(202).json({ isExpired, worker });
    }

    res.status(202).json({ isExpired });
  }catch(e){
    console.log(e.message);
    res.status(400).json({ error : e.message });
  }
}