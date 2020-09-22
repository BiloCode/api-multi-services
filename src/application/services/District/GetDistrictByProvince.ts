import District from "../../../database/models/District";

class GetDistrictByProvince {
  public exec = async (provinceId : number) => {
    try {
      const data = await District.findAll({
        where : { provinceId }
      });

      return data;
    }catch(e){
      console.log(e);
      return [];
    }
  }
}

export default GetDistrictByProvince;