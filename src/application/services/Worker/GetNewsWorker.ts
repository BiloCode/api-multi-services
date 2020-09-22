import District from "../../../database/models/District";
import Province from "../../../database/models/Province";
import Specialty from "../../../database/models/Specialty";
import User from "../../../database/models/User";
import Worker from "../../../database/models/Worker";

class GetNewsWorkers {
  public run = async () => {
    try{ 
      const workers = await Worker.findAll({
        include : [
          {
            model : User,
            attributes : ['name','lastname','profileImage','description'],
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
        attributes : ['id','availability','location','basePrice','createdAt','backgroundImage'],
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