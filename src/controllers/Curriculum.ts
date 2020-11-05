import { Request , Response } from 'express';

//MODELS
import Curriculum from '../application/database/mysql/models/Curriculum';
import User from '../application/database/mysql/models/User';
import Specialty from '../application/database/mysql/models/Specialty';

export const getCurriculums = async (req:Request,res:Response)=>{
  try {
    const curriculum = await Curriculum.findAll({
      attributes : ['id','title','content','state','createdAt','phone','email'],
      include : [
        {
          model : User,
          attributes : ['fullname','profileImage']
        },
        {
          model : Specialty,
          attributes : ['name']
        }
      ]
    })
    res.status(200).json(curriculum);

  }catch(e){
    res.status(500).json({message:e.message})
  }
}

export const curriculumFilterBySpecialty = async(req:Request,res:Response)=>{
  try {
    const { specialty } = req.body;
    const curriculum = await Curriculum.findAll({
      attributes:['id','title','content','state','createdAt'],
      include : [
        {
          model : User,
          attributes:['fullname']
        },
        {
          model : Specialty,
          attributes : ['name'],
          where : { name : specialty }
        }
      ]
    })

    res.status(200).json(curriculum);

  }catch(e){
    res.status(500).json({message:e.message})
  }
}

export const updateStateCurriculum = async(req:Request,res:Response) => {
  try {
    const { id , state } = req.body;
    
    
    const newCurriculum = Curriculum.update({
      state
    },{where:{ id }})

    res.status(200).json(newCurriculum);

  }catch(e){
    res.status(500).json({message:e.message});
  }
}

export const deleteCurriculum = async(req:Request,res:Response) => {
  const { id } = req.body;
  try{
    const curriculum = Curriculum.destroy({where:{id}});
    res.status(200).json(curriculum);
  }catch(e){
    res.status(500).json({message:e.message});
  }
}