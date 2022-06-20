"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Input_1 = require("./Input");
var styles_1 = require("@mui/styles");
var ExtrasStyles_1 = require("../menuStyles/ExtrasStyles");
var Extras = function (_a) {
    var classes = _a.classes, type = _a.type, items = _a.items;
    return (react_1.default.createElement("section", { className: classes.Extras },
        react_1.default.createElement("h2", { className: classes.ExtrasHeading }, type),
        items.map(function (item, index) { return (react_1.default.createElement("article", { className: classes.MenuItem, key: index },
            react_1.default.createElement("div", { className: classes.ExtrasName }, item.name),
            react_1.default.createElement(Input_1.default, { type: type, name: item.name, index: index }),
            react_1.default.createElement("strong", { className: classes.ExtrasPrice },
                "$",
                item.price))); })));
};
exports.default = (0, styles_1.withStyles)(ExtrasStyles_1.default)(Extras);
