import { Request , Response } from 'express';

//MODELS
import Curriculum from '../database/mysql/models/Curriculum';
import User from '../database/mysql/models/User';
import Specialty from '../database/mysql/models/Specialty';

export const getCurriculums = async (req:Request,res:Response)=>{
  try {
    const curriculum = await Curriculum.findAll({
      attributes : ['title','content','state','createdAt'],
      include : [
        {
          model : User,
          attributes : ['name','lastName']
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
      attributes:['title','content','state','createdAt'],
      include : [
        {
          model : User,
          attributes:['name','lastName']
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

// interface Filter {
//   query:object
//   filter(table:string,campo:string,value:string):void
// }

// class FilterCurriculum implements Filter {
//   private query = {
//     attributes : ['title','content','state','createdAt'],
//     include : [
//       {
//         model : User,
//         attributes : ['name','lastName'],
//         where : {}
//       },
//       {
//         model : Specialty,
//         attributes : ['name'],
//         where : {}
//       }
//     ],
//     where : {}
//   }
//   public filter = (table:string,campo:string,value:string) => {
//     if ( table === 'user' ){
//       this.query.include[0].where[campo] = value  
//     } else if ( table === 'specialty' ) {
//       this.query.include[0].where[campo] = value 
//     } else if ( table === 'curriculum' ) {
//       this.query.where[campo] = value
//     }
//   }
//   public getQuery = () => this.query;
// }

// const filter = new FilterCurriculum();