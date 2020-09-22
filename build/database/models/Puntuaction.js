"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __importDefault(require(".."));
var sequelize_1 = require("sequelize");
var Puntuaction = __1.default.define('puntuaction', {
    amount: {
        type: sequelize_1.DataTypes.TINYINT,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 5
        }
    }
}, {
    updatedAt: false
});
exports.default = Puntuaction;
