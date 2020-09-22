import District from "../../../database/models/District";
import Province from "../../../database/models/Province";
import User from "../../../database/models/User";

class FindUserById {
  public exec = async (id : number) => {
    try {
      const userFind = await User.findByPk(id,{
        attributes : ['id','name','lastname','profileImage','description','createdAt'],
        include : [
          {
            model : District,
            attributes : ['id','name'],
            include : [
              { 
                model : Province,
                attributes : ['id','name']
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