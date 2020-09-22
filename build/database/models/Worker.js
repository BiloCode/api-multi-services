"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var __1 = __importDefault(require(".."));
;
var Worker = __1.default.define('worker', {
    backgroundImage: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    availability: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'available'
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    },
    basePrice: {
        type: sequelize_1.DataTypes.DOUBLE,
        allowNull: false
    }
}, {
    updatedAt: false
});
exports.default = Worker;
