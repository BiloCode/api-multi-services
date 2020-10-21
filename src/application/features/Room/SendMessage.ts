import Room from "../../database/mongodb/schemas/Room";

class SendMessage {
  public exec = async (roomId : string, messageId : string) : Promise<boolean> => {
    try{
      const updateRoom = await Room.updateOne(
        { _id : roomId },
        { $push : { messageList : messageId }
      });

      return updateRoom.n > 0;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default SendMessage;