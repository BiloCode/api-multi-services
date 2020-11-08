import { Request, Response } from "express";
import { Op } from 'sequelize';
import User from "../application/database/mysql/models/User";
import District from "../application/database/mysql/models/District";
import Worker from "../application/database/mysql/models/Worker";

class UserControll {
  queryBase = {
    attributes : ['id','fullname','username','password','description','profileImage','createdAt'],
    include : [
      {
        model : District,
        attributes : ['name'],
      },
      {
        model : Worker,
        required : false
      }
    ],
  }

  public filterByDistrictName(name){
    this.queryBase.include[0]['where'] = { name : { [Op.substring] : name } };
  }
  public filterByName(name){
    this.queryBase['where'] = { fullname : { [Op.substring] : name } };
  }
}


//FILTERS
export const filterUserByDistrict = async(req:Request,res:Response) => {
  try {
    const { districtName } = req.body;
    
    const user = new UserControll();
    user.filterByDistrictName(districtName);

    const users = await User.findAll(user.queryBase);
    res.status(200).json(users);
  }catch(e){
    res.status(500).json({message:e.message});
  }
}


export const filterUserByName = async (req:Request,res:Response)=>{
  try {

    const { fullname } = req.body;
    
    const user = new UserControll();
    user.filterByName(fullname);

    const users = await User.findAll(user.queryBase);
    res.status(200).json(users);

  }catch(e){
    console.log(e.message)
    res.status(500).json({error:e.message})
  }
}


//CRUD BASICO
export const getUsers = async (req : Request, res : Response) => {
  try{
    const user = new UserControll();
    const users = await User.findAll(user.queryBase);
    res.status(200).json(users);
  }catch(e){
    console.log(e);
    res.status(500).json({ response : e.message });
  }
}

export const userDelete = async (req : Request, res : Response) => {
  const { id } = req.body;

  try {
    const isDelete = await User.destroy({ 
      where : { id } 
    });

    res.status(200).json({ isDelete });
  }catch(e) { 
    console.log(e.message);
    res.status(500).json({ response : e.message });
  }
}

export const userUpdate = async (req : Request, res : Response) => {
  try {
    //district -> idDistrict
    const { name , username , password , lastName , districtID , id } = req.body;
    await User.update({
      name,username,password,lastName,districtID
    }, { where : { id } })
    

  } catch(e){ console.log(e.message) }

}