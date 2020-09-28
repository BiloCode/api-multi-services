import Room from "../../database/mongodb/schemas/Room";

class GetRoomById {
  public exec = async (id : string) => {
    try {
      const room = await Room.findOne({ _id : id }).exec();
      return room;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetRoomById;