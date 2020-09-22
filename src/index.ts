import express, { Request, Response } from 'express';
import cors from 'cors';
import compression from 'compression';

//Router
import routerApp from './router/app';
import routerPanel from './router/panel';

//Database
import sequelize from './database';
import './database/associations';

//Configuration
const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Routes
app.use('/app',routerApp);
app.use('/panel', routerPanel);

app.get('/', (req : Request,res : Response) => {
  res.status(200).send('Welcome');
})

//Port
app.listen(port, async () => {
  console.log('Running...');
  await sequelize.sync({ force : false });
})