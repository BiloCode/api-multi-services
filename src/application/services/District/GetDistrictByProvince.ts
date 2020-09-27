import District from "../../../database/mysql/models/District";

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