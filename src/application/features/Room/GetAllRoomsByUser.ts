import Room from "../../database/mongodb/schemas/Room";

class GetAllRoomsByUser {
  public exec = async (userId : number) => {
    try {
      const rooms = await Room.find({
        userId 
      }).populate('messageList');

      return rooms;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetAllRoomsByUser;