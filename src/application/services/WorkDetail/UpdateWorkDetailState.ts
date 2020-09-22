import WorkDetail from "../../../database/models/WorkDetail";
import { WorkDetailState } from "../../types";

class UpdateWorkDetailState {
  public exec = async (workId : number, state : WorkDetailState) => {
    try {
      const isUpdate = await WorkDetail.update({ state },{
        where : {
          id : workId
        }
      });

      return isUpdate ? true : false;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default UpdateWorkDetailState;