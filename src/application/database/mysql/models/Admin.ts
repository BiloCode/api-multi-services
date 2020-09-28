import { DataTypes, Model } from 'sequelize';
import sequelize from '..';
import { AdminModel } from '../../../interfaces/models/AdminModel';

interface Fields extends AdminModel , Model {}

const Admin = sequelize.define<Fields>('admin',{
  username : {
    type : DataTypes.STRING,
    allowNull : false
  },
  password : {
    type : DataTypes.STRING,
    allowNull : false
  }
},{
  timestamps : false
});

export default Admin;