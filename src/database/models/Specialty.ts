import { DataTypes, Model } from 'sequelize';
import sequelize from "..";
import { SpecialtyModel } from '../../application/interfaces/models/SpecialtyModel';

interface Fields extends SpecialtyModel , Model {};

const Specialty = sequelize.define<Fields>('specialty',{
  name : {
    type : DataTypes.STRING,
    unique : true,
    allowNull : false
  },
  image : {
    type : DataTypes.STRING,
    defaultValue : ''
  }
},{
  timestamps : true
});

export default Specialty;