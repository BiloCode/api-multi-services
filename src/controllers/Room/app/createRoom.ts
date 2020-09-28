import { NextFunction, Request, Response } from "express";
import CreateRoom from "../../../application/repository/Room/CreateRoom";

export const Middleware = (req : Request, res : Response, next : NextFunction) => {
  const { users } = req.body;
  const condition = users && Array.isArray(users) && users.length === 2;
  if(!condition) {
    res.status(404).json({ error : 'Incorrect Format' });
  }

  next();
}

export const Handler = async (req : Request, res : Response) => {
  try {
    const { users } = req.body;
    const room = await new CreateRoom().exec(users);

    res.status(200).json({ room });
  }catch(e){
    console.log(e);
    res.status(500).json({ error : e.message });
  }
}