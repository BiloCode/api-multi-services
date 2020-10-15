import dotenv from 'dotenv';
dotenv.config();

import sequelize from '.';
import './associations';

import Admin from './models/Admin';
import User from './models/User';
import District from './models/District';
import Province from './models/Province';
import Department from './models/Department';
import Worker from './models/Worker';
import Specialty from './models/Specialty';
import WorkDetail from './models/WorkDetail';

//Admin
const admin = [
  { username : 'admin' , password : 'admin' },
  { username : 'admin2' , password : 'admin2' }
];

//Department
const deparment = [
  { name : 'Piura' },
  { name : 'Lima' },
  { name : 'Pucallpa' }
];

//Province
const province = [
  { departmentId : 1, name : 'Province Piura 1' },
  { departmentId : 1, name : 'Province Piura 2' },
  { departmentId : 2, name : 'Rimac' },
  { departmentId : 2, name : 'San Juan de Lurigancho' },
  { departmentId : 3, name : 'Province Pucallpa 1' },
  { departmentId : 3, name : 'Province Pucallpa 2' }
];

//District
const district = [
  { provinceId : 1 , name : 'Rimac' },
  { provinceId : 1 , name : 'Pachacutet' },
  { provinceId : 2 , name : 'District 3' },
  { provinceId : 2 , name : 'District 4' },
  { provinceId : 3 , name : 'District 5' },
  { provinceId : 3 , name : 'District 6' }
];

//User
const user = [
  { fullName : 'billy paredes' , username : 'billy' , password : '123456' , districtId : 1 },
  { fullName : 'imanol mayo' , username : 'imanol' , password : '123456', districtId : 2 },
  { fullName : 'ttito chavez' , username : 'ttito' , password : '123456', districtId : 1 },
  { fullName : 'cezar jefe' , username : 'cezar' , password : '123456', districtId : 3 },
  { fullName : 'desconocido desconocido' , username : 'desconocido' , password : '123456', districtId : 1 }
];

//Specialties
const specialty = [
  { name : 'Gasfitero' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Programador' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Albañil' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Electricista' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
  { name : 'Desarrollador Grafico' , image : 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
];

//Worker
const worker = [
  { userId : 1 , specialtyId : 1 , basePrice : 15 },
  { userId : 2 , specialtyId : 3 , basePrice : 15 }
];

//Work Detail
const workDetail = [
  {
    userId : 3,
    workerId : 1,
    state : 'pendient',
    price : 15.56,
    title : 'Atencion al Cliente',
    description : 'Necesito atender una pequeña necesidad aqui en mi hogar.'
  }
];

(async () => {

  try{
    await sequelize.sync({ force : true });

    await Admin.bulkCreate(admin);
    await Department.bulkCreate(deparment);
    await Province.bulkCreate(province);
    await District.bulkCreate(district);
    await User.bulkCreate(user);
    await Specialty.bulkCreate(specialty);
    await Worker.bulkCreate(worker);
    await WorkDetail.bulkCreate(workDetail);
  } catch(e){ 
    console.log(e) 
  }

})();