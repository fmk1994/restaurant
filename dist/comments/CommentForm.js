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
function CommentForm(props) {
    var classes = props.classes, handleSubmit = props.handleSubmit, submitLabel = props.submitLabel, _a = props.hasCancelButton, hasCancelButton = _a === void 0 ? false : _a, _b = props.initialText, initialText = _b === void 0 ? '' : _b, handleCancel = props.handleCancel;
    var _c = (0, react_1.useState)(initialText), text = _c[0], setText = _c[1];
    var _d = (0, react_1.useState)(''), username = _d[0], setUsername = _d[1];
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
}
exports.default = (0, styles_1.withStyles)(CommentFormStyles_1.default)(CommentForm);
