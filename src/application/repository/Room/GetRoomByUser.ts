import Room from "../../database/mongodb/schemas/Room";

class GetRoomByUser {
  public exec = async (userId : number) => {
    try {
      const userRooms = await Room.find({ users : userId }).exec();
      return userRooms;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetRoomByUser;