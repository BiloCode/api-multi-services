import Room from "../../database/mongodb/schemas/Room";

class GetRoomById {
  public exec = async (id? : string) => {
    if(!id) return null;

    try {
      const room = await Room.findOne({ _id : id }).populate('messageList');
      return room;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetRoomById;