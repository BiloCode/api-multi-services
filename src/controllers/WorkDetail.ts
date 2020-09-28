import { Request , Response, query } from 'express';

//MODELS

import Worker from '../application/database/mysql/models/Worker';
import WorkDetail from '../application/database/mysql/models/WorkDetail';
import User from '../application/database/mysql/models/User';

class WorkDetailController {

  public create = async(req : Request, res : Response)=>{
    try {
      const { state , price, description , workerId, userId } = req.body;

      const detail = await WorkDetail.create({
        state,
        price,
        description,
        workerId,
        userId
      });

      res.status(200).json(detail);
    }catch(e){
      console.log(e);
      res.status(500).json({ message:e.message });
    }
  }

  public get = async(req : Request,res : Response)=>{
    try {
      const detail = await WorkDetail.findAll({
        attributes : ['id','createdAt','state','price','description'],
        include : [
          {
            model : User,
            attributes : ['name','lastName']
          },
          {
            model : Worker,
            attributes : ['basePrice']
          }
        ]
      });

      res.status(200).json(detail);
    }catch(e){
      console.log(e);
      res.status(500).json({message:e.message})
    }
  }

  public getById = async(req : Request,res : Response)=>{
    try {
      const { id } = req.body;

      const result = await WorkDetail.findByPk(id,{
        attributes : ['id','createdAt','state','price','description'],
        include : [
          {
            model : User,
            attributes : ['name','lastName']
          },
          {
            model : Worker,
            attributes : ['basePrice']
          }
        ]
      });

      res.status(200).json(result);
    }catch(e){
      console.log(e);
      res.status(500).json({message:e.message})
    }
  }

}

export default WorkDetailController;