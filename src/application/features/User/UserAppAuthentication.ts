import { Authentication } from "../../interfaces/Authentication";
import User from "../../database/mysql/models/User";
import District from "../../database/mysql/models/District";
import Province from "../../database/mysql/models/Province";

class UserAppAuthentication implements Authentication {
  public exec = async (username : string, password : string) => {
    try{
      const userFind = await User.findOne({
        attributes : ['id','fullName','profileImage','username','description','createdAt'],
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
        ],
        where : { 
          username,
          password
        }
      });
      
      return userFind;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default UserAppAuthentication;