import { Op } from 'sequelize';
import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class GetNewsWorkers {
  public run = async (provinceId : number) => {
    try{ 
      const workers = await Worker.findAll({
        include : [
          {
            model : User,
            attributes : ['id','fullName','profileImage','description'],
            include : [
              {
                model : District,
                attributes : ['name','location','provinceId'],
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
            ]
          },
          {
            model : Specialty,
            attributes : ['name']
          }
        ],
        attributes : ['id','availability','basePrice','createdAt'],
        limit : 8,
        order: [
          ['createdAt','ASC']
        ],
/*         where : {
          provinceId : {
            [Op.col] : 'user.district.provinceId',
            [Op.eq] : provinceId
          }
        } */
      });

      return workers;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetNewsWorkers;