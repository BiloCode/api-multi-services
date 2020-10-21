import WorkDetail from "../../database/mysql/models/WorkDetail";

interface IParams {
  userId : number;
  location : string;
  workerId : number;
  price : number;
  description : string;
}

class CreateWorkDetail {
  public exec = async (data : IParams) => {
    try {
      const isCreate = await WorkDetail.create(data);
      return isCreate ? true : false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}

export default CreateWorkDetail;