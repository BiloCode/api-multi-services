import { Request,Response } from 'express';
import routeFiles from '../configs';

//Models
import Specialty from '../application/database/mysql/models/Specialty';


export const specialtyCreate = async(req:Request,res:Response)=>{

  try {
    const filename = req.file.originalname;
    const { name } = req.body;
    const image = `${routeFiles.specialty}${filename}`

    const specialty = await Specialty.create({
      name, image,
    })
    res.status(200).json(specialty);
  }catch(e){
    res.status(500).json({message:e.message})
  }
}

export const specialtyUpdate = async(req:Request,res:Response)=>{
  try {
  
    const { id , name } = req.body;
    let filename = req.file.originalname;
    let image = `${routeFiles.specialty}${filename}`;

    const specialty = await Specialty.update({
      name,image,
    },{ where : { id } })

    res.status(200).json(specialty);
  }catch(e){
    res.status(500).json({message:e.message})
  }
}

export const specialtyDelete = async(req:Request,res:Response)=>{
  try {
    const { id } = req.body;
    const specialty = await Specialty.destroy({ where : { id } })
    res.status(200).json(specialty);
  }catch(e){
    res.status(500).json({message:e.message})
  }
}