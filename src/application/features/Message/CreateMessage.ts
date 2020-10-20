import Message from "../../database/mongodb/schemas/Message";

class CreateMessage {
  public exec = async (message : string, userId : number) => {
    try {
      const messageSave = new Message({
        message,
        userId
      });

      return await messageSave.save();
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default CreateMessage;