import { Request, Response } from "express";
import GetDistrictByProvince from "../../application/features/District/GetDistrictByProvince";

export default async (req : Request, res : Response) => {
  try {
    const { id } = req.params;
    const districts = await new GetDistrictByProvince().exec(parseInt(id));

    res.status(200).json({ districts });
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}