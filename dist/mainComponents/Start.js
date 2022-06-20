"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var Button_1 = require("@mui/material/Button");
var Paper_1 = require("@mui/material/Paper");
var StartStyles_1 = require("../styles/StartStyles");
var ikonastronastartowa_png_1 = require("../pictures/ikonastronastartowa.png");
var react_scroll_1 = require("react-scroll");
var Start = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(Paper_1.default, { id: 'top', className: classes.mainPage },
        react_1.default.createElement("div", { className: classes.logoArea },
            react_1.default.createElement("img", { alt: 'logo', className: classes.logo, src: ikonastronastartowa_png_1.default })),
        react_1.default.createElement("div", { className: classes.buttonsArea },
            react_1.default.createElement(react_scroll_1.Link, { spy: true, smooth: true, offset: 0, duration: 500, activeClass: 'active', to: 'menu' },
                react_1.default.createElement(Button_1.default, { key: 'order_online', className: classes.mainButtons, variant: 'contained' }, "Order Online")),
            react_1.default.createElement(Button_1.default, { key: 'bookTable', className: classes.mainButtons, variant: 'contained', onClick: function () { return react_scroll_1.animateScroll.scrollToBottom(); } }, "Reservation"))));
};
exports.default = (0, styles_1.withStyles)(StartStyles_1.default)(Start);
