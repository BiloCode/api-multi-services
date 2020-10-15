import { DataTypes } from "sequelize";
import sequelize from "..";

const Department = sequelize.define('department',{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
  name : {
    type : DataTypes.STRING,
    unique : true
  },
  location : {
    type : DataTypes.JSON,
    defaultValue : '{}'
  }
},{
  timestamps : false
});

export default Department;