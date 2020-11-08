import { Router } from 'express';

import { getUsers , userDelete , filterUserByName , filterUserByDistrict } from '../../controllers/User';
import { getCurriculums , curriculumFilterBySpecialty , updateStateCurriculum , deleteCurriculum} from '../../controllers/Curriculum';
import { specialtyCreate , specialtyDelete , specialtyUpdate } from '../../controllers/Specialty';
import { getWorkers, getWorkersBySpecialty, getWorkerById, workerCreate, workerUpdate, deleteWorker , getWorkerByName } from '../../controllers/Worker';
import checkAdminLogin from '../../controllers/Auth/panel/checkAdminLogin';
import checkToken from '../../controllers/Auth/panel/checkToken';
import getSpecialtyAll from '../../controllers/Specialty/getSpecialtyAll';
import curriculumCreate from '../../controllers/Curriculum/app/curriculumCreate';

const app = Router();


//Auth
app.post('/auth/login', checkAdminLogin);
app.post('/auth/token/check', checkToken);

//Users
app.get('/user', getUsers);
app.post('/user/delete', userDelete);
app.post('/user/filterByName',filterUserByName);
app.post('/user/filterByDistrict',filterUserByDistrict);

//Workers
app.get('/worker',getWorkers);
app.post('/worker/filterBySpecialty',getWorkersBySpecialty);
app.post('/worker/filterByName',getWorkerByName)
app.get('/worker/:id', getWorkerById);
app.post('/worker/add', workerCreate);
app.post('/worker/update',workerUpdate);
app.post('/worker/delete',deleteWorker);

//Work
//app.get('/worker/work',workDetail.get);
//app.get('/worker/:id/work',workDetail.getById);

//Curriculum
app.get('/curriculum', getCurriculums);
app.post('/curriculum/filter', curriculumFilterBySpecialty);
app.post('/curriculum/create', curriculumCreate);
app.post('/curriculum/updateState',updateStateCurriculum);
app.post('/curriculum/delete',deleteCurriculum)

// Specialty
app.get('/specialty', getSpecialtyAll);
app.post('/specialty/create',specialtyCreate);
app.post('/specialty/update', specialtyUpdate);
app.post('/specialty/delete',specialtyDelete);

export default app;