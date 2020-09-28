import Room from "../../../database/mongodb/schemas/Room";

class CreateRoom {
  public exec = async (users : [number,number]) => {
    try {
      const newRoom = new Room({ users });

      return await newRoom.save();
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default CreateRoom;