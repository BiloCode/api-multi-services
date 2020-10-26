import Room from "../../database/mongodb/schemas/Room";

class CreateRoom {
  public exec = async (userWorkerId : number, userId : number) => {
    try {
      const newRoom = new Room({ userWorkerId, userId });

      return await newRoom.save();
    }catch(e){
      console.log(e.message);
      return null;
    }
  }
}

export default CreateRoom;