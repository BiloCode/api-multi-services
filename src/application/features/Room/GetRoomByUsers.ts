import Room from "../../database/mongodb/schemas/Room";

class GetRoomByUsers {
  public exec = async (workerId : number, userId : number) => {
    try {
      const userRooms = await Room.findOne({
        workerId,
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