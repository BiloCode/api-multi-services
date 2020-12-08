import User from "../../database/mysql/models/User";

class UserUpdateProfileImage {
  public exec = async (userId : number,profileImage : string) => {
    try {
      const isUpdated = await User.update({ profileImage }, {
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

export default UserUpdateProfileImage;