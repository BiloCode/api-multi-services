import User from "../../database/mysql/models/User";

class UpdateProfileImage {
  public exec = async (userId : number,profileImage : string) => {
    try {
      const isUpdated = await User.update({ profileImage }, {
        where : {
          id : userId
        }
      });

      return isUpdated;
    }catch(e){
      console.log(e);
    }
  }
}

export default UpdateProfileImage;