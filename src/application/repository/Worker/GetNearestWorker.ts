import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class GetNearestWorker {

  //Search for district
  public run = async (districtId : number) => {
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
            ],
            where : { districtId }
          },
          {
            model : Specialty,
            attributes : ['name']
          }
        ],
        attributes : ['id','availability','location','basePrice','backgroundImage'],
        limit : 8
      });

      return workers;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetNearestWorker;