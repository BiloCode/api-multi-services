import User from "../../database/mysql/models/User";

class UpdateDescription {
  public exec = async (userId : number, description : string) => {
    try {
      const isUpdated = await User.update({ description }, {
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

export default UpdateDescription;