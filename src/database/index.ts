import { Sequelize } from 'sequelize';
import { database } from '../config';

const sequelize = new Sequelize('mysql://bb0066cd3dac83:6157c3ea@us-cdbr-east-02.cleardb.com/heroku_7ba0cb12424997c?reconnect=true',{ 
  dialect : 'mysql' 
});

export default sequelize;