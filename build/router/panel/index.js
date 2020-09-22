"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var User_1 = require("../../controllers/User");
var Curriculum_1 = require("../../controllers/Curriculum");
var Specialty_1 = require("../../controllers/Specialty");
var Worker_1 = require("../../controllers/Worker");
var checkAdminLogin_1 = __importDefault(require("../../controllers/Auth/panel/checkAdminLogin"));
var checkToken_1 = __importDefault(require("../../controllers/Auth/panel/checkToken"));
var getSpecialtyAll_1 = __importDefault(require("../../controllers/Specialty/getSpecialtyAll"));
var curriculumCreate_1 = __importDefault(require("../../controllers/Curriculum/app/curriculumCreate"));
var app = express_1.Router();
//Auth
app.post('/auth/login', checkAdminLogin_1.default);
app.post('/auth/token/check', checkToken_1.default);
//Users
app.get('/user', User_1.getUsers);
app.post('/user/delete', User_1.userDelete);
app.post('/user/filter', User_1.getUserByName);
//Workers
app.get('/worker', Worker_1.getWorkers);
app.get('/worker/filter/:filter', Worker_1.getWorkersBySpecialty);
app.get('/worker/:id', Worker_1.getWorkerById);
app.post('/worker/add', Worker_1.workerCreate);
app.post('/worker/update', Worker_1.workerUpdate);
//Work
//app.get('/worker/work',workDetail.get);
//app.get('/worker/:id/work',workDetail.getById);
//Curriculum
app.get('/curriculum', Curriculum_1.getCurriculums);
app.post('/curriculum/filter', Curriculum_1.curriculumFilterBySpecialty);
app.post('/curriculum/create', curriculumCreate_1.default);
// Specialty
app.get('/specialty', getSpecialtyAll_1.default);
app.post('/specialty/create', Specialty_1.specialtyCreate);
app.post('/specialty/update', Specialty_1.specialtyUpdate);
app.post('/specialty/delete', Specialty_1.specialtyDelete);
exports.default = app;
