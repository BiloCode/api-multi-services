import { UserModelAdd } from "../../interfaces/models/UserModel";
import User from "../../database/mysql/models/User";

class UserCreate {
  public exec = async (params : UserModelAdd) => {
    try {
      const user = await User.create(params);
      return user ? true : false;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default UserCreate;