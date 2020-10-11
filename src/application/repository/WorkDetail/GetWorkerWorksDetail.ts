import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";
import Worker from "../../database/mysql/models/Worker";

class GetWorkerWorksDetail {
  public exec =  async (workerId : number) => {
    try {
      const works = await WorkDetail.findAll({
        include : [
          {
            model : Worker,
            where : {
              id : workerId
            }
          },
          {
            model : User,
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

export default GetWorkerWorksDetail;