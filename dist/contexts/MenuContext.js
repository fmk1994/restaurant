"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuProvider = exports.MenuContext = void 0;
var react_1 = require("react");
exports.MenuContext = (0, react_1.createContext)();
function MenuProvider(props) {
    var _a = (0, react_1.useState)({}), items = _a[0], setItems = _a[1];
    var updateItem = function (type, index, count) {
        var _a;
        var key = "".concat(type.toLowerCase(), "-").concat(index);
        setItems(__assign(__assign({}, items), (_a = {}, _a[key] = Number(count), _a)));
    };
    return (react_1.default.createElement(exports.MenuContext.Provider, { value: [items, updateItem] }, props.children));
}
exports.MenuProvider = MenuProvider;
