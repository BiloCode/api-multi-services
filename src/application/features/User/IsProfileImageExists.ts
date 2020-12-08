import User from "../../database/mysql/models/User";

class isProfileImageExists {
  public exec = async (id : number) => {
    try {
      const user =  await User.findByPk(id, {
        attributes : ['profileImage']
      });

      return user ? user.profileImage : '';
    }catch(e){
      console.log(e);
      return new Error();
    }
  }
}

export default isProfileImageExists;