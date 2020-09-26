import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DBNAME!,
  process.env.USER!,
  process.env.PASSWORD!,
  { 
    dialect : 'mysql',
    host : process.env.HOST
  }
);

export default sequelize;