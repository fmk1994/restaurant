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
var react_1 = require("react");
var aboutUsItemData_1 = require("../data/aboutUsItemData");
var styles_1 = require("@mui/styles");
var AboutUsStyles_1 = require("../styles/AboutUsStyles");
var Dialog_1 = require("@mui/material/Dialog");
var DialogContent_1 = require("@mui/material/DialogContent");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var Typography_1 = require("@mui/material/Typography");
var material_3 = require("@mui/material");
var Transition = (0, react_1.forwardRef)(function Transition(props, ref) {
    return react_1.default.createElement(material_1.Slide, __assign({ direction: 'up', ref: ref }, props));
});
function AboutUs(props) {
    var classes = props.classes;
    var _a = (0, react_1.useState)(false), open = _a[0], setOpen = _a[1];
    var _b = (0, react_1.useState)(0), buttonIndex = _b[0], setButtonIndex = _b[1];
    (0, react_1.useEffect)(function () {
        setButtonIndex(buttonIndex);
    }, [buttonIndex]);
    var handleClickOpen = (0, react_1.useCallback)(function (e) {
        setButtonIndex(e.target.attributes.id.value);
        setOpen(true);
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(false);
    }, []);
    return (react_1.default.createElement("div", { id: 'about-us' },
        react_1.default.createElement("div", { className: classes.aboutUs },
            react_1.default.createElement(Typography_1.default, { className: classes.title, align: 'center' }, "ABOUT US"),
            react_1.default.createElement(material_3.Divider, { className: classes.divider, variant: 'middle' }),
            react_1.default.createElement("div", { className: classes.contentWrapper },
                aboutUsItemData_1.aboutUsItemData.map(function (data, index) { return (react_1.default.createElement(react_1.default.Fragment, { key: index },
                    react_1.default.createElement(material_2.Box, { id: index, onClick: handleClickOpen, className: classes.box, sx: {
                            backgroundImage: "url(".concat(aboutUsItemData_1.aboutUsItemData[index].img, ")"),
                        } },
                        react_1.default.createElement(Typography_1.default, { className: classes.boxName, paragraph: true, variant: 'subtitle1' }, data.name)))); }),
                react_1.default.createElement(material_2.Box, { className: classes.gridThird },
                    react_1.default.createElement(Typography_1.default, { className: classes.textArea, align: 'center', variant: 'body1', paragraph: true }, aboutUsItemData_1.aboutUsTextFill[0].TeamText)),
                react_1.default.createElement(material_2.Box, { className: classes.gridFourth },
                    react_1.default.createElement(Typography_1.default, { className: classes.textArea, align: 'center', variant: 'body1', paragraph: true }, aboutUsItemData_1.aboutUsTextFill[1].PlaceText))),
            react_1.default.createElement(Dialog_1.default, { id: buttonIndex, fullWidth: true, maxWidth: 'xl', className: classes.dialog, open: open, TransitionComponent: Transition, keepMounted: true, onClose: handleClose, "aria-describedby": 'dialog-slide-about-us' },
                react_1.default.createElement(DialogContent_1.default, { className: classes.dialogContent, sx: {
                        backgroundImage: "url(".concat(aboutUsItemData_1.aboutUsItemData[buttonIndex].dialogPhoto, ")"),
                    } }),
                react_1.default.createElement(material_2.Box, { className: classes.text }, aboutUsItemData_1.aboutUsItemData[buttonIndex].dialogText)))));
}
exports.default = (0, styles_1.withStyles)(AboutUsStyles_1.default)(AboutUs);
