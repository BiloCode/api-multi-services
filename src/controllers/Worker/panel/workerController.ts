import { Op } from 'sequelize';

//MODELS
import Worker from "../../../application/database/mysql/models/Worker";
import Specialty from '../../../application/database/mysql/models/Specialty';
import User from '../../../application/database/mysql/models/User';
import WorkDetail from "../../../application/database/mysql/models/WorkDetail";
import { query } from 'express';

class WorkerController {
  queryBase = {
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

  public findByName(name:string){
    this.queryBase.include[0]['where'] = { fullname : { [Op.substring] : name } }
  }

  public findBySpecialtyName(name:string){
    this.queryBase.include[1]['where'] = { name : { [Op.substring] : name } }
  }


}

export default WorkerController;