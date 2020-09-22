"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetFormattedToken = /** @class */ (function () {
    function GetFormattedToken() {
        this.exec = function (token) {
            var tokenFormat = /^(Bearer){1}\s([a-zA-Z0-9.\-_<>;])*$/g;
            if (!token.match(tokenFormat))
                throw 'Token is not in the format correct';
            return token.split(' ')[1];
        };
    }
    return GetFormattedToken;
}());
exports.default = GetFormattedToken;
