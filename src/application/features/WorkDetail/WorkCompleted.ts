import WorkDetail from "../../database/mysql/models/WorkDetail";

class WorkCompleted {
  public exec = async (workId : number) => {
    try {
      const isUpdated = await WorkDetail.update({
        state : 'completed',
        finished : new Date()
      },{
        where : {
          id : workId,
          state : 'pendient'
        }
      });

      return isUpdated.length > 0;
    }catch(e){
      console.log(e);
      return false;
    }
  }
}

export default WorkCompleted;