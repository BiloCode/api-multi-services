import { Op } from 'sequelize';

import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class FindWorkerByName {
  public exec = async (name : string, provinceId : number) => {
    try {
      const workers = await Worker.findAll({
        include : [
          {
            model : User,
            attributes : ['id','fullName','profileImage','description','createdAt'],
            include : [
              {
                model : District,
                attributes : ['name','id','location'],
                include : [
                  {
                    model : Province,
                    attributes : ['name','location'],
                    where : {
                      id : provinceId
                    }
                  }
                ]
              }
            ],
            where : {
              fullName : {
                [Op.like] : `%${name}%`
              }
            }
          },
          {
            model : Specialty,
            attributes : ['name']
          }
        ],
        attributes : ['id','availability','basePrice']
      });

      return workers;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default FindWorkerByName;