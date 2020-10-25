import Room from "../../database/mongodb/schemas/Room";

class GetRoomByUsers {
  public exec = async (userWorkerId : number, userId : number) => {
    try {
      const userRooms = await Room.findOne({
        userWorkerId,
        userId
      }).populate('messageList');
      
      return userRooms;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetRoomByUsers;