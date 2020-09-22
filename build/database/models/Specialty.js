"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var __1 = __importDefault(require(".."));
;
var Specialty = __1.default.define('specialty', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    }
}, {
    timestamps: true
});
exports.default = Specialty;
