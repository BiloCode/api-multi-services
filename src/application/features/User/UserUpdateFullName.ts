import User from "../../database/mysql/models/User";

class UpdateFullName {
  public exec = async (userId : number, fullName : string) => {
    try {
      const isUpdated = await User.update({ fullName }, {
        where : {
          id : userId
        }
      });

      return isUpdated.length > 0;
    }catch(e){
      console.log(e);
    }
  }
}

export default UpdateFullName;