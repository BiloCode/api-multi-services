import { DataTypes } from "sequelize";
import sequelize from "..";

const Province = sequelize.define('province',{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
  name : DataTypes.STRING,
  location : {
    type : DataTypes.JSON,
    defaultValue : '{}'
  }
},{
  timestamps : false
});

export default Province;