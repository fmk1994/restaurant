"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Input_1 = require("./Input");
var styles_1 = require("@mui/styles");
var MainsStyles_1 = require("../menuStyles/MainsStyles");
function Mains(props) {
    var classes = props.classes, meals = props.meals, type = props.type;
    return (react_1.default.createElement("section", { className: classes.Mains },
        react_1.default.createElement("h2", { className: classes.MainsHeading }, type),
        meals.map(function (meal, index) { return (react_1.default.createElement("article", { className: classes.MenuItem, key: index },
            react_1.default.createElement("h3", { className: classes.MainsName }, meal.name),
            react_1.default.createElement(Input_1.default, { type: 'mains', name: meal.name, index: index }),
            react_1.default.createElement("strong", { className: classes.mainsPrice },
                "$",
                meal.price),
            react_1.default.createElement("p", { className: classes.MainsDescription }, meal.description))); })));
}
exports.default = (0, styles_1.withStyles)(MainsStyles_1.default)(Mains);
