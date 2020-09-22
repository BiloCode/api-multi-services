"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var config_1 = require("../../../config");
var TokenIsExpired = /** @class */ (function () {
    function TokenIsExpired() {
        this.exec = function (token) {
            try {
                jsonwebtoken_1.default.verify(token, config_1.tokenKey);
                return false;
            }
            catch (e) {
                console.log(e);
                return true;
            }
        };
    }
    return TokenIsExpired;
}());
exports.default = TokenIsExpired;
