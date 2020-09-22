"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = __importDefault(require("."));
require("./associations");
var Admin_1 = __importDefault(require("./models/Admin"));
var User_1 = __importDefault(require("./models/User"));
var District_1 = __importDefault(require("./models/District"));
var Province_1 = __importDefault(require("./models/Province"));
var Department_1 = __importDefault(require("./models/Department"));
var Worker_1 = __importDefault(require("./models/Worker"));
var Specialty_1 = __importDefault(require("./models/Specialty"));
var WorkDetail_1 = __importDefault(require("./models/WorkDetail"));
//Admin
var admin = [
    { username: 'admin', password: 'admin' },
    { username: 'admin2', password: 'admin2' }
];
//Department
var deparment = [
    { name: 'Piura' },
    { name: 'Lima' },
    { name: 'Pucallpa' }
];
//Province
var province = [
    { departmentId: 1, name: 'Province Piura 1' },
    { departmentId: 1, name: 'Province Piura 2' },
    { departmentId: 2, name: 'Rimac' },
    { departmentId: 2, name: 'San Juan de Lurigancho' },
    { departmentId: 3, name: 'Province Pucallpa 1' },
    { departmentId: 3, name: 'Province Pucallpa 2' }
];
//District
var district = [
    { provinceId: 1, name: 'Rimac' },
    { provinceId: 1, name: 'Pachacutet' },
    { provinceId: 2, name: 'District 3' },
    { provinceId: 2, name: 'District 4' },
    { provinceId: 3, name: 'District 5' },
    { provinceId: 3, name: 'District 6' }
];
//User
var user = [
    { name: 'billy', lastname: 'paredes', username: 'billy', password: '123456', districtId: 1 },
    { name: 'imanol', lastname: 'mayo', username: 'imanol', password: '123456', districtId: 2 },
    { name: 'ttito', lastname: 'chavez', username: 'ttito', password: '123456', districtId: 1 },
    { name: 'cezar', lastname: 'jefe', username: 'cezar', password: '123456', districtId: 3 },
    { name: 'desconocido', lastname: 'desconocido', username: 'desconocido', password: '123456', districtId: 1 }
];
//Specialties
var specialty = [
    { name: 'Gasfitero', image: 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
    { name: 'Programador', image: 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
    { name: 'Albañil', image: 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
    { name: 'Electricista', image: 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
    { name: 'Desarrollador Grafico', image: 'https://cdn.icon-icons.com/icons2/1993/PNG/512/direction_gps_location_map_maps_navigation_pin_icon_123198.png' },
];
//Worker
var worker = [
    { userId: 1, specialtyId: 1, basePrice: 15 },
    { userId: 2, specialtyId: 3, basePrice: 15 }
];
//Work Detail
var workDetail = [
    { userId: 3, workerId: 1, state: 'pendient', price: 15.56, description: 'Muy buen trabajo' }
];
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 10, , 11]);
                return [4 /*yield*/, _1.default.sync({ force: true })];
            case 1:
                _a.sent();
                return [4 /*yield*/, Admin_1.default.bulkCreate(admin)];
            case 2:
                _a.sent();
                return [4 /*yield*/, Department_1.default.bulkCreate(deparment)];
            case 3:
                _a.sent();
                return [4 /*yield*/, Province_1.default.bulkCreate(province)];
            case 4:
                _a.sent();
                return [4 /*yield*/, District_1.default.bulkCreate(district)];
            case 5:
                _a.sent();
                return [4 /*yield*/, User_1.default.bulkCreate(user)];
            case 6:
                _a.sent();
                return [4 /*yield*/, Specialty_1.default.bulkCreate(specialty)];
            case 7:
                _a.sent();
                return [4 /*yield*/, Worker_1.default.bulkCreate(worker)];
            case 8:
                _a.sent();
                return [4 /*yield*/, WorkDetail_1.default.bulkCreate(workDetail)];
            case 9:
                _a.sent();
                return [3 /*break*/, 11];
            case 10:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 11];
            case 11: return [2 /*return*/];
        }
    });
}); })();
