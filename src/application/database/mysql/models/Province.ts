import { DataTypes } from "sequelize";
import sequelize from "..";

const Province = sequelize.define('province',{
  id : {
    type : DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true
  },
  name : DataTypes.STRING,
},{
  timestamps : false
});

export default Province;