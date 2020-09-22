"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = require("../config");
var sequelize = new sequelize_1.Sequelize(config_1.database.dbname, config_1.database.user, config_1.database.password, { dialect: 'mysql' });
exports.default = sequelize;
