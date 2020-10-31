import { Op } from 'sequelize';
import WorkDetail from "../../database/mysql/models/WorkDetail";

class WorkStateWithUser {
  public exec = async (userId : number, workerId : number) => {
    try {
      const workState = await WorkDetail.findOne({
        where : {
          userId,
          workerId,
          [Op.or] : [
            { state : 'pendient' },
            { state : 'waiting-confirmation' }
          ]
        }
      });

      if(workState) return {
        state : workState.state,
        id : workState.id
      }

      return null;
    }catch(e) {
      console.log(e);
      return null;
    }
  }
}

export default WorkStateWithUser;