"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var CommentFormStyles_1 = require("./styles/CommentFormStyles");
var Box_1 = require("@mui/material/Box");
var TextField_1 = require("@mui/material/TextField");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var material_3 = require("@mui/material");
var material_4 = require("@mui/material");
var CommentForm = function (_a) {
    var classes = _a.classes, handleSubmit = _a.handleSubmit, submitLabel = _a.submitLabel, _b = _a.hasCancelButton, hasCancelButton = _b === void 0 ? false : _b, _c = _a.initialText, initialText = _c === void 0 ? '' : _c, handleCancel = _a.handleCancel;
    var _d = (0, react_1.useState)(initialText), text = _d[0], setText = _d[1];
    var _e = (0, react_1.useState)(''), username = _e[0], setUsername = _e[1];
    var isSubmitButtonDisabled = text.length === 0;
    var onSubmit = (0, react_1.useCallback)(function (event) {
        event.preventDefault();
        handleSubmit(text, username);
        setText('');
        setUsername('');
    }, [text, username]);
    return (react_1.default.createElement(Box_1.default, null,
        react_1.default.createElement("form", { className: classes.form, onSubmit: onSubmit },
            !hasCancelButton && (react_1.default.createElement(material_4.FormControl, { className: classes.nameInput, margin: 'normal', required: true },
                react_1.default.createElement(material_3.InputLabel, { htmlFor: 'name' }, "Enter your name"),
                react_1.default.createElement(material_2.Input, { inputProps: { maxLength: 11 }, value: username, onChange: function (e) { return setUsername(e.target.value); } }))),
            react_1.default.createElement(TextField_1.default, { label: 'Type here...', className: classes.textField, multiline: true, inputProps: { maxLength: 200 }, rows: 4, value: text, onChange: function (e) { return setText(e.target.value); } }),
            react_1.default.createElement(material_1.Button, { className: classes.formButton, type: 'submit', disabled: isSubmitButtonDisabled }, submitLabel),
            hasCancelButton && (react_1.default.createElement(material_1.Button, { type: 'submit', className: classes.formButton, onClick: handleCancel }, "Cancel")))));
};
exports.default = (0, styles_1.withStyles)(CommentFormStyles_1.default)(CommentForm);
