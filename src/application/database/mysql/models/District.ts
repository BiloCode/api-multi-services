import { DataTypes } from "sequelize";
import sequelize from "..";

const District = sequelize.define('district',{
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
  timestamps : false,
});

export default District;