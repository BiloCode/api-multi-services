"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GetFormattedToken_1 = __importDefault(require("../../../application/services/Token/GetFormattedToken"));
var TokenValidate_1 = __importDefault(require("../../../application/services/Token/TokenValidate"));
function default_1(req, res) {
    try {
        var token = req.body.token;
        if (!token) {
            res.status(200).json({ message: 'Request incorrect format' });
        }
        var tokenFormat = new GetFormattedToken_1.default().exec(token);
        var isExpired = new TokenValidate_1.default().exec(tokenFormat);
        res.status(202).json({ isExpired: isExpired });
    }
    catch (e) {
        console.log(e);
        res.status(400).json({ error: e });
    }
}
exports.default = default_1;
