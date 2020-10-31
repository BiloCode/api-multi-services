import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import Specialty from "../../database/mysql/models/Specialty";
import User from "../../database/mysql/models/User";
import Worker from "../../database/mysql/models/Worker";

class FindWorkerById {
  public exec = async (id : number) => {
    try {
      const worker = await Worker.findByPk(id, {
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
                    attributes : ['name','location']
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
        attributes : ['id','availability','basePrice']
      });

      return worker;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default FindWorkerById;