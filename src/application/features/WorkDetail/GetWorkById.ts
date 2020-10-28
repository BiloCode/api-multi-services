import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";

class GetWorkById {
  public exec = async (id : number) => {
    try {
      const work = await WorkDetail.findByPk(id,{
        include : [
          {
            model : User,
            attributes : ['id','profileImage'],
            include : [
              {
                model : District,
                attributes : ['id','name','location'],
                include : [
                  {
                    model : Province,
                    attributes : ['id','name','location']
                  }
                ]
              }
            ]
          }
        ],
        attributes : ['id','title','description','price','finished','state','createdAt'],
      });

      return work;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default GetWorkById;