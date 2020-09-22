import { DataTypes } from "sequelize";
import sequelize from "..";

const District = sequelize.define('district',{
  name : DataTypes.STRING,
},{
  timestamps : false
});

export default District;