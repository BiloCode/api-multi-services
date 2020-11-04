import dotenv from 'dotenv';
dotenv.config();

//Imports
import express from 'express';
import http, { request } from 'http';
import cors from 'cors';
import compression from 'compression';
import * as socket from './socket';
import path from 'path';
//Router
import routerApp from './router/app';
import routerPanel from './router/panel';

//Database (mongodb / mysql)
import './application/database/mongodb';
import sequelize from './application/database/mysql';
import './application/database/mysql/associations';


//Configuration
const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 5000;

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Routes
app.use('/app',routerApp);
app.use('/panel', routerPanel);

//STATIC ROUTES 
app.use(express.static(path.join(__dirname,'Files')));

//Port
server.listen(port, async () => {
  console.log('Running...');
  await sequelize.sync({ force : false });
});

//Socket IO
socket.startServer(server);