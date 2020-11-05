import { Request, Response } from "express";

//MODELS
import Worker from "../application/database/mysql/models/Worker";
import Specialty from '../application/database/mysql/models/Specialty';
import User from '../application/database/mysql/models/User';
import WorkDetail from "../application/database/mysql/models/WorkDetail";

const query = {
  attributes : [ 'id','availability','basePrice'],
  include : [
    {
      model : User,
      attributes : ['fullname','username','profileImage'],
    },
    {
      model : Specialty,
      attributes : ['name']
    },
    {
      model : WorkDetail,
      attributes : ['state','price','description'],
      include : [
        {
          model : User,
          attributes : ['fullname','description']
        }
      ]
    }
  ]
}

export const getWorkers = async (req : Request, res : Response) => {
  try {
    const workers = await Worker.findAll(query);
    res.status(200).json(workers);
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
}

export const getWorkerById = async (req : Request , res : Response) => {
  const { id } = req.params;

  try{
    const workerData = await Worker.findByPk(id, query);

    console.log(id);
    res.status(200).json(workerData);
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message })
  }
}

export const workerCreate = async (req : Request, res : Response) => {
  const { id, userId , specialtyId , location , basePrice } = req.body;

  try{
    const worker = await Worker.create({ 
      id,
      userId,
      specialtyId,
      basePrice,
      location 
    });

    res.status(200).json(worker);
  }catch(e){
    console.log(e);
    res.status(500).json({ message : e.message });
  }
} 

export const workerUpdate = async (req:Request,res:Response)=>{
  try {
    const { id , location , basePrice , userId , name , lastname } = req.body;

    const isUpdatedUser = await User.update({ name , lastname },{ where : { id : userId } });
    
    if(isUpdatedUser.length){
      await Worker.update({ location , basePrice },{ where : { id } });
      res.status(200).json({ 
        message : 'Worker update' 
      });
    }else{
      res.status(400).json({ 
        message : 'User Not Update' 
      });
    }
  }catch(e){
    console.log(e.message);
    res.status(500).json({ message : e.message });
  }
}

export const getWorkersBySpecialty = async (req:Request,res:Response)=>{
  const { specialty } = req.body;

  try{
    const workers = await Worker.findAll({
      attributes:['id','availability','basePrice'],
      include : [
        {
          model : User,
          attributes: ['fullname','username','profileImage']
        },
        {
          model : Specialty,
          attributes : ['name'],
          where : { 
            name : specialty 
          }
        },
        {
          model : WorkDetail,
          attributes : ['state','price','description'],
          include : [
            {
              model : User,
              attributes : ['fullname','description']
            }
          ]
        }
      ]
    }) 

    res.status(200).json(workers);
  }catch(e){
    console.log(e.message);
    res.status(500).json({ message : e.message });
  }
}

export const deleteWorker = (req:Request,res:Response) => {
  try{
    const { id } = req.body;
    let worker = Worker.destroy({where:{id}})
  }catch(e){
    res.status(500).json({message:e.message});
  }
}