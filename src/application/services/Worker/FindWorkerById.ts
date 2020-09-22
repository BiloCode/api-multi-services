import District from "../../../database/models/District";
import Province from "../../../database/models/Province";
import Specialty from "../../../database/models/Specialty";
import User from "../../../database/models/User";
import Worker from "../../../database/models/Worker";

class FindWorkerById {
  public find = async (id : number) => {
    try {
      const worker = await Worker.findByPk(id, {
        include : [
          {
            model : User,
            attributes : ['name','lastname','profileImage','districtId','description'],
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
        attributes : ['id','availability','location','basePrice','backgroundImage']
      });

      return worker;
    }catch(e) {
      console.log(e);
    }
  }
}

export default FindWorkerById;