import Room from "../../database/mongodb/schemas/Room";

class GetAllRoomsByUserWorker {
  public exec = async (userWorkerId : number) => {
    try {
      const rooms = await Room.find({
        userWorkerId 
      }).populate('messageList');

      return rooms;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetAllRoomsByUserWorker;