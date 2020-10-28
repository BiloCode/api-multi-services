import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import User from "../../database/mysql/models/User";
import WorkDetail from "../../database/mysql/models/WorkDetail";

class GetWorkListByUserId {
  public exec = async (userId : number) => {
    try {
      const userWorks = await WorkDetail.findAll({
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
        where : {
          userId
        }
      });

      return userWorks;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default GetWorkListByUserId;