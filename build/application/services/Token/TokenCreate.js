"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../../config");
var TokenCreate = /** @class */ (function () {
    function TokenCreate() {
        this.run = function (payload) {
            var token = jsonwebtoken_1.default.sign({
                data: payload
            }, config_1.tokenKey, { expiresIn: '7d' });
            return "Bearer " + token;
        };
    }
    return TokenCreate;
}());
exports.default = TokenCreate;
