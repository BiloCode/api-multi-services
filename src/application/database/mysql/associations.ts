import User from './models/User';
import District from './models/District';
import Worker from './models/Worker';
import Specialty from './models/Specialty';
import Curriculum from './models/Curriculum';
import WorkDetail from './models/WorkDetail';
import Province from './models/Province';
import Department from './models/Department';

//Department id -> Province
Department.hasMany(Province,{
  foreignKey : {
    allowNull : false
  }
});

Province.belongsTo(Department);

//Province id -> District
Province.hasMany(District,{
  foreignKey : {
    allowNull : false
  }
});

District.belongsTo(Province);

//District id -> User
District.hasMany(User, {
  foreignKey : {
    allowNull : false
  }
});

User.belongsTo(District);

//Worker id -> WorkDetail
Worker.hasMany(WorkDetail,{
  foreignKey : {
    allowNull : false
  }
});

WorkDetail.belongsTo(Worker);

//User id -> WorkDetail
User.hasMany(WorkDetail,{
  foreignKey : {
    allowNull : false
  }
});

WorkDetail.belongsTo(User);

//Specialty id -> Worker
Specialty.hasOne(Worker,{
  foreignKey : {
    allowNull : false
  }
});

Worker.belongsTo(Specialty);

//User id -> Worker
User.hasOne(Worker,{
  foreignKey : {
    allowNull : false
  }
});

Worker.belongsTo(User);

//Specialty id -> Curriculum
Specialty.hasOne(Curriculum,{
  foreignKey : {
    allowNull : false
  }
});

Curriculum.belongsTo(Specialty);

//User id -> Curriculum
User.hasOne(Curriculum,{
  foreignKey : {
    allowNull : false
  }
});

Curriculum.belongsTo(User);