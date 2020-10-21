import Room from "../../database/mongodb/schemas/Room";

class CreateRoom {
  public exec = async (workerId : number, userId : number) => {
    try {
      const newRoom = new Room({ workerId, userId });

      return await newRoom.save();
    }catch(e){
      console.log(e.message);
      return null;
    }
  }
}

export default CreateRoom;