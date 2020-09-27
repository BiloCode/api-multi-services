import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { UserModel } from "../../../application/interfaces/models/UserModel";

interface Fields extends UserModel , Model {}

const User = sequelize.define<Fields>('user',{
  name : {
    type : DataTypes.STRING,
    allowNull : false
  },
  lastname : {
    type : DataTypes.STRING,
    allowNull : false
  },
  username : {
    type : DataTypes.STRING,
    unique : true,
    allowNull : false,
  },
  password : {
    type : DataTypes.STRING,
    allowNull : false,
  },
  description : {
    type : DataTypes.STRING,
    defaultValue : ''
  },
  profileImage : {
    type : DataTypes.STRING,
    defaultValue : ''
  }
})

export default User;