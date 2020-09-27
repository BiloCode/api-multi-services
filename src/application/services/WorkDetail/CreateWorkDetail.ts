import WorkDetail from "../../../database/mysql/models/WorkDetail";

interface IParams {
  userId : number;
  workerId : number;
}

class CreateWorkDetail {
  public exec = async (data : IParams) => {
    try {
      const isCreate = await WorkDetail.create(data);
      return isCreate ? true : false;
    } catch (e) {
      console.log(e);
    }
  }
}

export default CreateWorkDetail;