"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./models/User"));
var District_1 = __importDefault(require("./models/District"));
var Worker_1 = __importDefault(require("./models/Worker"));
var Specialty_1 = __importDefault(require("./models/Specialty"));
var Curriculum_1 = __importDefault(require("./models/Curriculum"));
var WorkDetail_1 = __importDefault(require("./models/WorkDetail"));
var Province_1 = __importDefault(require("./models/Province"));
var Department_1 = __importDefault(require("./models/Department"));
//Department id -> Province
Department_1.default.hasMany(Province_1.default, {
    foreignKey: {
        allowNull: false
    }
});
Province_1.default.belongsTo(Department_1.default);
//Province id -> District
Province_1.default.hasMany(District_1.default, {
    foreignKey: {
        allowNull: false
    }
});
District_1.default.belongsTo(Province_1.default);
//District id -> User
District_1.default.hasMany(User_1.default, {
    foreignKey: {
        allowNull: false
    }
});
User_1.default.belongsTo(District_1.default);
//Specialty id -> Worker
Specialty_1.default.hasOne(Worker_1.default, {
    foreignKey: {
        allowNull: false
    }
});
Worker_1.default.belongsTo(Specialty_1.default);
//User id -> Worker
User_1.default.hasOne(Worker_1.default, {
    foreignKey: {
        allowNull: false
    }
});
Worker_1.default.belongsTo(User_1.default);
//Specialty id -> Curriculum
Specialty_1.default.hasOne(Curriculum_1.default, {
    foreignKey: {
        allowNull: false
    }
});
Curriculum_1.default.belongsTo(Specialty_1.default);
//User id -> Curriculum
User_1.default.hasOne(Curriculum_1.default, {
    foreignKey: {
        allowNull: false
    }
});
Curriculum_1.default.belongsTo(User_1.default);
//Worker id -> WorkDetail
Worker_1.default.hasMany(WorkDetail_1.default, {
    foreignKey: {
        allowNull: false
    }
});
WorkDetail_1.default.belongsTo(Worker_1.default);
//User id -> WorkDetail
User_1.default.hasMany(WorkDetail_1.default, {
    foreignKey: {
        allowNull: false
    }
});
WorkDetail_1.default.belongsTo(User_1.default);
