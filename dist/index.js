(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    var ForceBoolean = function (value) {
        switch (typeof value) {
            case 'boolean':
                if (value)
                    return true;
            case 'number':
                return (value === 1);
            case 'object':
                return !(value === null);
            case 'string':
                return (value === 'true' || value === '1');
            case 'undefined':
            default:
                return false;
        }
    };
    return ForceBoolean;
});
