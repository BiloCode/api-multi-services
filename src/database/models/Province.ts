import { DataTypes } from "sequelize";
import sequelize from "..";

const Province = sequelize.define('province',{
  name : DataTypes.STRING,
},{
  timestamps : false
});

export default Province;