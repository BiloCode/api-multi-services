import { IRoom } from "../../interfaces/schemas/Room";
import FindUserById from "../User/FindUserById";

class FormatAllRoomsObtainsForWorker {
  public exec = async (rooms : IRoom[]) => {
    try {
      const isHaveLastMessage = rooms.filter(v => v.messageList.length > 0);
      const promiseList = isHaveLastMessage.map(async v => {
        let user = await new FindUserById().exec(v.userId);

        //Ultimo mensaje enviado
        let lastMessage = v.messageList[v.messageList.length - 1];

        return {
          id : user?.id,
          fullName : user?.fullName,
          profileImage : user?.profileImage,
          message : {
            value : lastMessage.message,
            createdAt : lastMessage.createdAt
          }
        }
      })

      return await Promise.all(promiseList);
    }catch(e){
      console.log(e);
      return []
    }
  }
}

export default FormatAllRoomsObtainsForWorker;