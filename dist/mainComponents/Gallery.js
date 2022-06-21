"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var GalleryStyles_1 = require("../styles/GalleryStyles");
var galleryItemData_1 = require("../data/galleryItemData");
var Gallery = function (_a) {
    var classes = _a.classes;
    var _b = (0, react_1.useState)(), photoIndex = _b[0], setIndex = _b[1];
    var _c = (0, react_1.useState)(false), toggleActive = _c[0], setToggleActive = _c[1];
    var handleClick = function (e, index) {
        if (e.target.className.includes('active')) {
            setToggleActive(!toggleActive);
            setIndex(undefined);
        }
        else {
            setIndex(index);
        }
    };
    return (react_1.default.createElement("div", { className: classes.gallery, id: 'gallery' },
        react_1.default.createElement("div", { className: classes.title },
            react_1.default.createElement(material_1.Typography, { variant: 'h1', align: 'center', sx: {
                    letterSpacing: '0.5rem',
                    fontSize: { xs: '3rem', md: '4rem' },
                    display: { xl: 'none' },
                } }, "GALLERY"),
            react_1.default.createElement(material_2.Divider, { sx: {
                    width: '50vw',
                    bgcolor: 'brown',
                    marginBottom: { xs: '5px', sm: '20px' },
                    display: { xl: 'none' },
                }, variant: 'middle' })),
        galleryItemData_1.default.map(function (item, index) { return (react_1.default.createElement("div", { id: item.img, className: "".concat(classes.panel, " ").concat(photoIndex === index && classes.active), style: { backgroundImage: "url(".concat(item.img, ")") }, onClick: function (e) { return handleClick(e, index); }, key: item.img })); })));
};
exports.default = (0, styles_1.withStyles)(GalleryStyles_1.default)(Gallery);
