import { IRoom } from "../../interfaces/schemas/Room";
import FindWorkerById from "../Worker/FindWorkerById";

class FormatAllRoomsObtainsForUser {
  public exec = async (rooms : IRoom[]) => {
    try {
      const isHaveLastMessage = rooms.filter(v => v.messageList.length > 0);
      const promiseList = isHaveLastMessage.map(async v => {
        let worker : any = await new FindWorkerById().exec(v.userWorkerId);

        //Ultimo mensaje enviado
        let lastMessage = v.messageList[v.messageList.length - 1];

        return {
          id : worker?.user.id,
          fullName : worker.user?.fullName,
          profileImage : worker.user?.profileImage,
          basePrice : worker.basePrice,
          specialty : worker.specialty.name,
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

export default FormatAllRoomsObtainsForUser;