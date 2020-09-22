"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var __1 = __importDefault(require(".."));
;
var WorkDetail = __1.default.define('workdetail', {
    state: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'waiting-confirmation'
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: ''
    }
}, {
    timestamps: true
});
exports.default = WorkDetail;
