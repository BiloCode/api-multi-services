import { QueryTypes } from "sequelize";
import sequelize from "../../database/mysql";

class GetNearestWorker {

  //Search for district
  public exec = async (provinceId : number, limit? : number) => {
    try{ 
      let query = `
        SELECT
          worker.id as id,
          worker.basePrice as basePrice,
          worker.availability as availability,
          worker.createdAt,
          user.id as 'user.id',
          user.fullName as 'user.fullName',
          user.profileImage as 'user.profileImage',
          user.description as 'user.description',
          district.id as 'user.district.id',
          district.name as 'user.district.name',
          district.location as 'user.district.location',
          province.id as 'user.district.province.id',
          province.name as 'user.district.province.name',
          province.location as 'user.district.province.location',
          specialty.name as 'specialty.name'
        from workers as worker 
          INNER JOIN users as user ON worker.userId = user.id
          INNER JOIN districts as district ON district.id = user.districtId
          INNER JOIN provinces as province ON province.id = district.provinceId
          INNER JOIN specialties as specialty ON specialty.id = worker.specialtyId
        WHERE province.id = ${provinceId}
        ORDER BY worker.createdAt DESC
      `;

      if(limit) query += `LIMIT ${limit}`;

      const workers = await sequelize.query(query, {
        type : QueryTypes.SELECT,
        nest : true
      });

      return workers;
    }catch(e){
      console.log(e);
      return null;
    }
  }
}

export default GetNearestWorker;