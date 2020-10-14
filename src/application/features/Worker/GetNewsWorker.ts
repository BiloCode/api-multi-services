import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class GetNewsWorkers {
  public run = async () => {
    try{ 
      const workers = await Worker.findAll({
        include : [
          {
            model : User,
            attributes : ['fullName','profileImage','description'],
            include : [
              {
                model : District,
                attributes : ['name'],
                include : [
                  {
                    model : Province,
                    attributes : ['name']
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
        attributes : ['id','availability','location','basePrice','createdAt'],
        limit : 8,
        order: [
          ['createdAt','ASC']
        ]
      });

      return workers;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetNewsWorkers;