import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";
import User from "../../database/mysql/models/User";

class FindUserById {
  public exec = async (id : number) => {
    try {
      const userFind = await User.findByPk(id,{
        attributes : ['id','fullName','profileImage','description','createdAt'],
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
      });

      return userFind;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default FindUserById;