import { Request, Response } from "express";
import GetProvinceByDepartment from "../../application/features/Province/GetProvinceByDeparment";

export default async (req : Request, res : Response) => {
  try {
    const { id } = req.params;
    const provinces = await new GetProvinceByDepartment().exec(parseInt(id));

    res.status(200).json({ provinces }); 
  }catch(e){
    console.log(e);
    res.status(404).json({ error : e.message });
  }
}