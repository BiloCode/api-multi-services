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
import Curriculum from './models/Curriculum';

//Admin
const admin = [
  { username : 'admin' , password : 'admin' },
  { username : 'admin2' , password : 'admin2' }
];

//Department
const deparment = [
  { 
    name : 'Lima', 
    location : JSON.stringify({
      latitude : -12.0621065,
      longitude : -77.0365256
    })
  },
  { 
    name : 'Piura',
    location : JSON.stringify({
      latitude : -5.1949018,
      longitude : -80.6323
    })
  }
];

//Province
const province = [
  { 
    departmentId : 1,
    name : 'Lima',
    location : deparment.find(v => v.name === 'Lima')?.location
  },
  { 
    departmentId : 1,
    name : 'Huaral',
    location : JSON.stringify({
      latitude : -11.495,
      longitude : -77.20778
    })
  },
  { 
    departmentId : 2,
    name : 'Paita',
    location : JSON.stringify({
      latitude : -5.08917,
      longitude : -81.11444
    })
  },
  { 
    departmentId : 2,
    name : 'Huancabamba',
    location : JSON.stringify({
      latitude : -5.23889,
      longitude : -79.4506
    })
  }
];

//District
const district = [
  { 
    provinceId : 1,
    name : 'Rimac' 
  },
  { 
    provinceId : 1,
    name : 'Ancon' 
  },
  {
    provinceId : 1,
    name : 'Pachacutec'
  },
  { 
    provinceId : 2,
    name : 'Chancay' 
  },
  { 
    provinceId : 2,
    name : 'Sumbilca' 
  },
  {
    provinceId : 3,
    name : 'La Huaca'
  },
  {
    provinceId : 3,
    name : 'Amotape'
  },
  {
    provinceId : 4,
    name : 'El Carmen de la Frontera'
  },
  {
    provinceId : 4,
    name : 'Huarmaca'
  }
];

//User
const user = [
  { fullName : 'Billy Paredes Aycho' , username : 'billy' , password : '123456' , districtId : 1 ,description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Imanol Rojas' , username : 'imanol' , password : '123456', districtId : 3 , description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Ttito chavez' , username : 'ttito' , password : '123456', districtId : 2, description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'},
  { fullName : 'Cezar jefe' , username : 'cezar' , password : '123456', districtId : 2, description:'Usuario comun' , profileImage:'https://as.com/meristation/imagenes/2020/09/28/noticias/1601292392_502173_1601292453_noticia_normal.jpg'}
];

//Specialties
const image = 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png';
const specialty = [
  { name : 'Gasfitero' , image },
  { name : 'Programador' , image },
  { name : 'Maestro de Construcción' , image },
  { name : 'Electricista' , image },
  { name : 'Desarrollador Grafico' , image },
];

//Worker
const worker = [
  { userId : 1 , specialtyId : 2 , basePrice : 15 },
  { userId : 2 , specialtyId : 1, basePrice : 15 }
];

const curriculum = [
  { userId : 1 , specialtyId : 1 , title : 'Peticion para trabajo 1' , content : 'Quisiera solicitar para trabajar como frontend',phone : '999888777',email : 'usuario01@gmail.com',state:'in-wait'},
  { userId : 2 , specialtyId : 2 , title : 'Peticion para trabajo 2' , content : 'Quisiera solicitar para trabajar como backend',phone : '555444333',email : 'usuario02@gmail.com',state:'in-wait'},
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
    await Curriculum.bulkCreate(curriculum);
  } catch(e){ 
    console.log(e) 
  }
})();