import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { WorkDetailModel } from "../../application/interfaces/models/WorkDetailModel";

interface Fields extends WorkDetailModel , Model {};

const WorkDetail = sequelize.define<Fields>('workdetail', {
  state : {
    type : DataTypes.STRING,
    defaultValue : 'waiting-confirmation'
  } ,
  price : {
    type : DataTypes.DOUBLE,
  } ,
  description :{
    type:DataTypes.STRING,
    defaultValue : ''
  }
},{
  timestamps : true
});

export default WorkDetail;