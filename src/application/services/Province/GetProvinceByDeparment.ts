import Province from "../../../database/models/Province";

class GetProvinceByDepartment {
  public exec = async (departmentId : number) => {
    try {
      const data = await Province.findAll({
        where : { departmentId }
      });

      return data;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetProvinceByDepartment;