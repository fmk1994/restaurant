"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var data_1 = require("../data");
var styles_1 = require("@mui/styles");
var TotalStyles_1 = require("../menuStyles/TotalStyles");
var MenuContext_1 = require("../../contexts/MenuContext");
var TotalPriceContext_1 = require("../../contexts/TotalPriceContext");
function Total(props) {
    var classes = props.classes;
    var items = (0, react_1.useContext)(MenuContext_1.MenuContext)[0];
    var _a = (0, react_1.useContext)(TotalPriceContext_1.TotalPriceContext), totalPrice = _a.totalPrice, setTotalPrice = _a.setTotalPrice;
    (0, react_1.useEffect)(function () {
        var totalPrice = Object.keys(items).reduce(function (acc, curr) {
            var _a = curr.split('-'), group = _a[0], item = _a[1];
            var amount = items[curr] * data_1.default[group][item].price;
            return acc + amount;
        }, 0);
        setTotalPrice(totalPrice);
    }, [items]);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: classes.Total },
            react_1.default.createElement("span", { className: classes.TotalTitle }, "Total:"),
            react_1.default.createElement("span", { className: classes.TotalPrice },
                "$",
                totalPrice))));
}
exports.default = (0, styles_1.withStyles)(TotalStyles_1.default)(Total);
