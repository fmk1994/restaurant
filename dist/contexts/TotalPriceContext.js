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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TotalPriceContextProvider = exports.TotalPriceContext = void 0;
var react_1 = require("react");
exports.TotalPriceContext = (0, react_1.createContext)({
    totalPrice: 0,
    setTotalPrice: function () { return undefined; },
});
function TotalPriceContextProvider(_a) {
    var _b = _a.totalPrice, totalPrice = _b === void 0 ? 0 : _b, children = _a.children, props = __rest(_a, ["totalPrice", "children"]);
    var _c = (0, react_1.useState)(totalPrice), totalPriceQuery = _c[0], setTotalPriceQuery = _c[1];
    return (react_1.default.createElement(exports.TotalPriceContext.Provider, __assign({ value: {
            totalPrice: totalPriceQuery,
            setTotalPrice: setTotalPriceQuery,
        } }, props), children));
}
exports.TotalPriceContextProvider = TotalPriceContextProvider;
