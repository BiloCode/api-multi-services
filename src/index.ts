import dotenv from 'dotenv';
dotenv.config();

//Imports
import express from 'express';
import http, { request } from 'http';
import cors from 'cors';
import compression from 'compression';
import * as socket from './socket';

import multer from 'multer';
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
const port = process.env.PORT || 3000;

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(multer({
    dest:path.join(__dirname,'Files/images')
  }).single('image')
)

//Routes
app.use('/app',routerApp);
app.use('/panel', routerPanel);


//Port
server.listen(port, async () => {
  console.log('Running...');
  await sequelize.sync({ force : false });
});

//Socket IO
socket.startServer(server);