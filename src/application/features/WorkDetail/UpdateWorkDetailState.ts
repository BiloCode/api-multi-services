import WorkDetail from "../../database/mysql/models/WorkDetail";
import { WorkDetailState } from "../../types";

class UpdateWorkDetailState {
  public exec = async (workId : number, state : WorkDetailState) => {
    try {
      const isUpdated = await WorkDetail.update({ state },{
        where : {
          id : workId
        }
      });

      return isUpdated.length > 0;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default UpdateWorkDetailState;