import Specialty from "../../database/mysql/models/Specialty";

class GetSpecialties {
  public find = async () => {
    try {
      const specialties = await Specialty.findAll({
        attributes : ['name','image','id'],
      });
      
      return specialties;
    }catch(e){
      console.log(e);
      return [];
    }
  }
}

export default GetSpecialties;