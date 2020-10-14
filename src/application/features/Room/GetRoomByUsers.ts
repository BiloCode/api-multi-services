import Room from "../../database/mongodb/schemas/Room";

class GetRoomByUsers {
  public exec = async (usersId : [number,number]) => {
    try {
      const userRooms = await Room.findOne({ users : { $in : usersId } });
      return userRooms;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetRoomByUsers;