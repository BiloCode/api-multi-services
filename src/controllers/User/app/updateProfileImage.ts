import { Request, Response } from "express";

export default async (req : Request , res : Response) => {
  try {
    //...IN PROCESS...
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}