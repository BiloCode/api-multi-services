import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";
import Worker from "../../database/mysql/models/Worker";

class GetUserWorkdsDetail {
  public exec =  async (userId : number) => {
    try {
      const works = await WorkDetail.findAll({
        include : [
          {
            model : User,
            where : {
              id : userId
            }
          },
          {
            model : Worker,
          }
        ]
      });
      
      return works;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetUserWorkdsDetail;