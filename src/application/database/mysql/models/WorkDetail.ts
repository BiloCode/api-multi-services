import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { WorkDetailModel } from "../../../interfaces/models/WorkDetailModel";

interface Fields extends WorkDetailModel , Model {};

const WorkDetail = sequelize.define<Fields>('workdetail', {
  state : {
    type : DataTypes.STRING,
    defaultValue : 'waiting-confirmation'
  },
  price : {
    type : DataTypes.DOUBLE,
  },
  title : {
    type : DataTypes.STRING,
    allowNull : false
  },
  description :{
    type: DataTypes.STRING,
    allowNull : false
  },
  finished : {
    type : DataTypes.DATE,
    defaultValue : null
  }
},{
  timestamps : true
});

export default WorkDetail;