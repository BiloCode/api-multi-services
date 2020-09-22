import Specialty from "../../database/models/Specialty";

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