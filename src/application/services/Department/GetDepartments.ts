import Department from "../../../database/models/Department"

class GetDepartments {
  public exec = async () => {
    try {
      const deparments = await Department.findAll();
      return deparments;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetDepartments;