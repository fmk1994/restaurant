"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Mains_1 = require("../menu/menuComponents/Mains");
var Extras_1 = require("../menu/menuComponents/Extras");
var Total_1 = require("../menu/menuComponents/Total");
var data_json_1 = require("../menu/data.json");
var styles_1 = require("@mui/styles");
var MenuStyles_1 = require("../styles/MenuStyles");
var ikona_png_1 = require("../pictures/ikona.png");
var Menu = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement("div", { id: 'menu', className: classes.Menu },
        react_1.default.createElement("img", { src: ikona_png_1.default, className: classes.Logo }),
        react_1.default.createElement(Mains_1.default, { type: 'Mains', meals: data_json_1.default.mains }),
        react_1.default.createElement("aside", { className: classes.Aside },
            react_1.default.createElement(Extras_1.default, { type: 'Sides', items: data_json_1.default.sides }),
            react_1.default.createElement(Extras_1.default, { type: 'Drinks', items: data_json_1.default.drinks })),
        react_1.default.createElement(Total_1.default, null)));
};
exports.default = (0, styles_1.withStyles)(MenuStyles_1.default)(Menu);
