import Room from "../../database/mongodb/schemas/Room";

interface IMessage {
  message : string;
  userId : number;
}

class SendMessage {
  public exec = async (roomId : string, message : IMessage) : Promise<boolean> => {
    try{
      const currentRoom = await Room.findOne({ _id : roomId }).exec()  
      const messages = currentRoom ? 
                        [...currentRoom.messages, message ] : 
                        [];

      const updateRoom = await Room.updateOne({ _id : roomId },{ messages });
      return updateRoom.n > 0;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default SendMessage;