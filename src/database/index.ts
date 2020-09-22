import { Sequelize } from 'sequelize';
import { database } from '../config';

const sequelize = new Sequelize(
  database.dbname,
  database.user,
  database.password, 
  { dialect : 'mysql' }
);

export default sequelize;