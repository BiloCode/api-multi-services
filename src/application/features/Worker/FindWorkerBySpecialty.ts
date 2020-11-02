import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class FindWorkerBySpecialty {
  public exec = async (specialtyId : number, provinceId) => {
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
            ]
          },
          {
            model : Specialty,
            attributes : ['name'],
            where : { 
              id : specialtyId
            }
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

export default FindWorkerBySpecialty;