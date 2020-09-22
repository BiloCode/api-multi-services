import { DataTypes } from "sequelize";
import sequelize from "..";

const Department = sequelize.define('department',{
  name : {
    type : DataTypes.STRING,
    unique : true
  },
},{
  timestamps : false
});

export default Department;