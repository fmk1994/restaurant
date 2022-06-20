"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MenuContext_1 = require("../../contexts/MenuContext");
var Add_1 = require("@mui/icons-material/Add");
var Remove_1 = require("@mui/icons-material/Remove");
var material_1 = require("@mui/material");
var styles_1 = require("@mui/styles");
var InputStyles_1 = require("../menuStyles/InputStyles");
function Input(props) {
    var type = props.type, name = props.name, index = props.index, classes = props.classes;
    var _a = (0, react_1.useContext)(MenuContext_1.MenuContext), updateItem = _a[1];
    var _b = (0, react_1.useState)(0), count = _b[0], setCount = _b[1];
    (0, react_1.useEffect)(function () {
        updateItem(type, index, count);
    }, [count]);
    var disabled = count <= 0;
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(material_1.IconButton, { onClick: function () { return setCount(count + 1); } },
            react_1.default.createElement(Add_1.default, null)),
        react_1.default.createElement("div", { className: classes.number, name: name.replace(' ', '-').toLowerCase() },
            react_1.default.createElement("p", null, count !== 0 && count)),
        react_1.default.createElement(material_1.IconButton, { disabled: disabled, onClick: function () { return setCount(count - 1); } },
            react_1.default.createElement(Remove_1.default, null))));
}
exports.default = (0, styles_1.withStyles)(InputStyles_1.default)(Input);
