import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";
import Worker from "../../database/mysql/models/Worker";

class GetWorkListByUserId {
  public exec = async (userId : number) => {
    try {
      const userWorks = await WorkDetail.findAll({
         include : [
           {
             model : User,
             attributes : ['id'],
             where : {
               userId
             }
           }
         ]
      });

      return userWorks;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default GetWorkListByUserId;