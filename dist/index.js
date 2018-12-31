"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ForceBoolean = function (value) {
    switch (typeof value) {
        case 'boolean':
            if (value)
                return true;
        case 'number':
            return value > 0;
        case 'object':
            return !(value === null);
        case 'string':
            return value === 'true' || value === '1';
        case 'undefined':
        default:
            return false;
    }
};
exports.default = ForceBoolean;
