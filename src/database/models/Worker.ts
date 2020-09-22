import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { WorkerModel } from "../../application/interfaces/models/WorkerModel";

interface Fields extends WorkerModel , Model {};

const Worker = sequelize.define<Fields>('worker', {
  backgroundImage : {
    type : DataTypes.STRING,
    defaultValue : ''
  },
  availability : {
    type : DataTypes.STRING,
    defaultValue : 'available'
  },
  location : {
    type : DataTypes.STRING,
    defaultValue  :''
  },
  basePrice : {
    type : DataTypes.DOUBLE,
    allowNull : false
  }
},{
  updatedAt : false
});

export default Worker;