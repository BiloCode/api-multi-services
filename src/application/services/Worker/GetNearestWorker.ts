import District from "../../../database/models/District";
import Province from "../../../database/models/Province";
import Specialty from "../../../database/models/Specialty";
import User from "../../../database/models/User";
import Worker from "../../../database/models/Worker";

class GetNearestWorker {

  //Search for district
  public run = async (districtId : number) => {
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