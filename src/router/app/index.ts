import { Router } from "express";

import checkUserAppLogin from "../../controllers/Auth/app/checkUserAppLogin";
import getSpecialtyAll from "../../controllers/Specialty/getSpecialtyAll";
import getUserById from "../../controllers/User/getUserById";
import getWorkerById from "../../controllers/Worker/app/getWorkerById";
import curriculumCreate from "../../controllers/Curriculum/app/curriculumCreate";
import getNearestWorkers from "../../controllers/Worker/app/getNearestWorkers";
import getNewsWorkers from "../../controllers/Worker/app/getNewsWorkers";
import getDepartments from "../../controllers/Department/getDepartments";
import getProvinceByDeparment from "../../controllers/Province/getProvinceByDeparment";
import getDistrictByProvince from "../../controllers/District/getDistrictByProvince";
import createNewUser from "../../controllers/User/app/createNewUser";

import * as tokenVerify from "../../controllers/Auth/app/tokenVerify";

const app = Router();

app.get('/worker/new', getNewsWorkers);
app.get('/worker/:id', getWorkerById);

app.get('/specialty', getSpecialtyAll);
app.get('/user/:id', getUserById);

app.get('/department', getDepartments);
app.get('/province/department/:id', getProvinceByDeparment);
app.get('/district/province/:id', getDistrictByProvince);

app.post('/auth/login', checkUserAppLogin);
app.post('/auth/token/verify', tokenVerify.Middleware , tokenVerify.Handler);

app.post('/curriculum/add', curriculumCreate);
app.post('/worker/nearest', getNearestWorkers);
app.post('/user/add', createNewUser);

export default app;