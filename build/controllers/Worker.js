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
exports.getWorkersBySpecialty = exports.workerUpdate = exports.workerCreate = exports.getWorkerById = exports.getWorkers = void 0;
//MODELS
var Worker_1 = __importDefault(require("../database/models/Worker"));
var Specialty_1 = __importDefault(require("../database/models/Specialty"));
var User_1 = __importDefault(require("../database/models/User"));
var WorkDetail_1 = __importDefault(require("../database/models/WorkDetail"));
var query = {
    attributes: ['id', 'availability', 'basePrice', 'location'],
    include: [
        {
            model: User_1.default,
            attributes: ['name', 'username', 'lastName', 'profileImage'],
        },
        {
            model: Specialty_1.default,
            attributes: ['name']
        },
        {
            model: WorkDetail_1.default,
            attributes: ['state', 'price', 'description'],
            include: [
                {
                    model: User_1.default,
                    attributes: ['name', 'lastname', 'description']
                }
            ]
        }
    ]
};
exports.getWorkers = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var workers, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Worker_1.default.findAll(query)];
            case 1:
                workers = _a.sent();
                res.status(200).json(workers);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                console.log(e_1);
                res.status(500).json({ message: e_1.message });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getWorkerById = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, workerData, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Worker_1.default.findByPk(id, query)];
            case 2:
                workerData = _a.sent();
                console.log(id);
                res.status(200).json(workerData);
                return [3 /*break*/, 4];
            case 3:
                e_2 = _a.sent();
                console.log(e_2);
                res.status(500).json({ message: e_2.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.workerCreate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, userId, specialtyId, location, basePrice, worker, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, userId = _a.userId, specialtyId = _a.specialtyId, location = _a.location, basePrice = _a.basePrice;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Worker_1.default.create({
                        userId: userId,
                        specialtyId: specialtyId,
                        basePrice: basePrice,
                        location: location
                    })];
            case 2:
                worker = _b.sent();
                res.status(200).json(worker);
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                console.log(e_3);
                res.status(500).json({ message: e_3.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.workerUpdate = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, location_1, basePrice, userId, name_1, lastname, isUpdatedUser, e_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 5, , 6]);
                _a = req.body, id = _a.id, location_1 = _a.location, basePrice = _a.basePrice, userId = _a.userId, name_1 = _a.name, lastname = _a.lastname;
                return [4 /*yield*/, User_1.default.update({ name: name_1, lastname: lastname }, { where: { id: userId } })];
            case 1:
                isUpdatedUser = _b.sent();
                if (!isUpdatedUser.length) return [3 /*break*/, 3];
                return [4 /*yield*/, Worker_1.default.update({ location: location_1, basePrice: basePrice }, { where: { id: id } })];
            case 2:
                _b.sent();
                res.status(200).json({
                    message: 'Worker update'
                });
                return [3 /*break*/, 4];
            case 3:
                res.status(400).json({
                    message: 'User Not Update'
                });
                _b.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                e_4 = _b.sent();
                console.log(e_4.message);
                res.status(500).json({ message: e_4.message });
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.getWorkersBySpecialty = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var specialty, workers, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                specialty = req.params.filter;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, Worker_1.default.findAll({
                        attributes: ['id', 'availability', 'basePrice'],
                        include: [
                            {
                                model: User_1.default,
                                attributes: ['name', 'lastName', 'username', 'password']
                            },
                            {
                                model: Specialty_1.default,
                                attributes: ['name'],
                                where: {
                                    name: specialty
                                }
                            }
                        ]
                    })];
            case 2:
                workers = _a.sent();
                res.status(200).json(workers);
                return [3 /*break*/, 4];
            case 3:
                e_5 = _a.sent();
                console.log(e_5.message);
                res.status(500).json({ message: e_5.message });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
