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
if (!global.ForceBoolean) {
    global.ForceBoolean = ForceBoolean;
}
module.exports = ForceBoolean;
//# sourceMappingURL=index.js.map