import sequelize from "..";
import { DataTypes } from "sequelize";

const Puntuaction = sequelize.define('puntuaction',{
  amount : {
    type : DataTypes.TINYINT,
    defaultValue : 0,
    validate : {
      min : 0,
      max : 5
    }
  }
},{
  updatedAt : false
});

export default Puntuaction;