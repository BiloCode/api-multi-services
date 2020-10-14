import WorkDetail from "../../database/mysql/models/WorkDetail";
import Worker from "../../database/mysql/models/Worker";

class GetWorkListByWorkerId {
  public exec = async (workerId : number) => {
    try {
      const works = await WorkDetail.findAll({
         include : [
           {
             model : Worker,
             where : {
               id : workerId
             }
           }
         ],
         attributes : ['id','title','description','price','finished','state','createdAt']
      });

      return works;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default GetWorkListByWorkerId;