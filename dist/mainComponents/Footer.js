"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("@mui/styles");
var FooterStyles_1 = require("../styles/FooterStyles");
var Facebook_1 = require("@mui/icons-material/Facebook");
var Instagram_1 = require("@mui/icons-material/Instagram");
var Box_1 = require("@mui/material/Box");
var IconButton_1 = require("@mui/material/IconButton");
var Footer = function (_a) {
    var classes = _a.classes;
    return (React.createElement(Box_1.default, { className: classes.box, position: 'fixed' },
        React.createElement("div", null,
            React.createElement(IconButton_1.default, { href: '//facebook.com/thegoodtasterestaurant123123' },
                React.createElement(Facebook_1.default, null)),
            React.createElement(IconButton_1.default, { href: '//instagram.com/thegoodtasterestaurant123123' },
                React.createElement(Instagram_1.default, null))),
        React.createElement("div", { className: classes.creditsWrapper },
            "Used images:",
            React.createElement("a", { href: 'https://www.flaticon.com/free-icons/empty-cart', title: 'empty cart icons' }, "Empty cart icons created by smashingstocks - Flaticon"),
            React.createElement("a", { href: 'https://www.flaticon.com/free-icons/preparation', title: 'preparation icons' }, "Preparation icons created by SBTS2018 - Flaticon"))));
};
exports.default = (0, styles_1.withStyles)(FooterStyles_1.default)(Footer);
