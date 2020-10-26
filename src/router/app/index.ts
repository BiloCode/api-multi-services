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

import * as tokenCheking from "../../controllers/Auth/app/tokenCheking";
import updateFullName from "../../controllers/User/app/updateFullName";
import updateDescription from "../../controllers/User/app/updateDescription";
import getWorkListByWorkerId from "../../controllers/Work/getWorkListByWorkerId";
import getNearestWorkersUnlimited from "../../controllers/Worker/app/getNearestWorkersUnlimited";
import getWorkListByUserId from "../../controllers/Work/getWorkListByUserId";
import joinRoom from "../../controllers/Room/joinRoom";
import getWorkerBySpecialty from "../../controllers/Worker/app/getWorkerBySpecialty";
import getWorkerByName from "../../controllers/Worker/app/getWorkerByName";

const app = Router();

app.post('/auth/login', checkUserAppLogin);
app.post('/auth/token/verify', tokenCheking.Middleware , tokenCheking.Handler);

app.get('/specialty', getSpecialtyAll);

app.get('/department', getDepartments);
app.get('/province/department/:id', getProvinceByDeparment);
app.get('/district/province/:id', getDistrictByProvince);

app.post('/curriculum/add', curriculumCreate);

app.get('/user/:id', getUserById);
app.post('/user/add', createNewUser);
app.post('/user/list/work', getWorkListByUserId);
app.post('/user/join/room', joinRoom);

app.get('/worker/find/new', getNewsWorkers);
app.get('/worker/find/id/:id', getWorkerById);
app.get('/worker/find/specialty/:specialtyId', getWorkerBySpecialty);
app.get('/worker/find/name/:name', getWorkerByName);
app.post('/worker/nearest/unlimited', getNearestWorkersUnlimited);
app.post('/worker/nearest', getNearestWorkers);
app.post('/worker/update/fullname', updateFullName);
app.post('/worker/update/description', updateDescription);
app.post('/worker/list/work', getWorkListByWorkerId);

export default app;