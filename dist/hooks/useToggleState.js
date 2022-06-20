"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useToggle(initialVal) {
    if (initialVal === void 0) { initialVal = false; }
    var _a = (0, react_1.useState)(initialVal), state = _a[0], setState = _a[1];
    var toggle = function () {
        setState(!state);
    };
    return [state, toggle];
}
exports.default = useToggle;
