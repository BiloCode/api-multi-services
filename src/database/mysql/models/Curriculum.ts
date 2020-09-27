import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { CurriculumModel } from "../../../application/interfaces/models/CurriculumModel";

interface Fields extends CurriculumModel , Model {};

const Curriculum = sequelize.define<Fields>('curriculum', {
  title : {
    type : DataTypes.STRING,
    allowNull : false,
  },
  content : {
    type : DataTypes.STRING,
    allowNull : false
  },
  state : {
    type : DataTypes.STRING,
    defaultValue : 'wait'
  }
},{
  updatedAt: false
});

export default Curriculum;