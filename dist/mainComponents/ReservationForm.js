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
var Input_1 = require("@mui/material/Input");
var styles_1 = require("@mui/styles");
var ReservationFormStyles_1 = require("../styles/ReservationFormStyles");
var material_1 = require("@mui/material");
var Paper_1 = require("@mui/material/Paper");
var material_2 = require("@mui/material");
var material_3 = require("@mui/material");
var material_4 = require("@mui/material");
var material_5 = require("@mui/material");
var TextField_1 = require("@mui/material/TextField");
var material_ui_phone_number_1 = require("material-ui-phone-number");
var AdapterDateFns_1 = require("@mui/x-date-pickers/AdapterDateFns");
var LocalizationProvider_1 = require("@mui/x-date-pickers/LocalizationProvider");
var DateTimePicker_1 = require("@mui/x-date-pickers/DateTimePicker");
var day = new Date();
var nextDay = new Date(day);
nextDay.setDate(day.getDate() + 1);
var initialFormData = Object({
    date: new Date(),
    guestsNum: '',
    number: '',
    firstName: '',
    lastName: '',
    text: '',
});
function ReservationForm(props) {
    var classes = props.classes;
    var _a = (0, react_1.useState)(initialFormData), formData = _a[0], setFormData = _a[1];
    var seats = [1, 2, 3, 4, 5, 6];
    var handleSubmit = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        setFormData({
            date: date,
            guestsNum: guestsNum,
            number: number,
            firstName: firstName,
            lastName: lastName,
            text: text,
        });
        alert("Reservation params: ".concat(JSON.stringify(formData)));
    }, []);
    var _b = (0, react_1.useState)(1), guestsNum = _b[0], setGuestsNum = _b[1];
    var _c = (0, react_1.useState)(new Date(nextDay)), date = _c[0], setDate = _c[1];
    var _d = (0, react_1.useState)(''), text = _d[0], setText = _d[1];
    var _e = (0, react_1.useState)(''), number = _e[0], setNumber = _e[1];
    var _f = (0, react_1.useState)(''), firstName = _f[0], setFirstName = _f[1];
    var _g = (0, react_1.useState)(''), lastName = _g[0], setLastName = _g[1];
    (0, react_1.useEffect)(function () {
        setFormData({
            date: date,
            guestsNum: guestsNum,
            number: number,
            firstName: firstName,
            lastName: lastName,
            text: text,
        });
    }, [date, guestsNum, text, number, firstName, lastName]);
    return (react_1.default.createElement(Paper_1.default, { className: classes.wrapper },
        react_1.default.createElement("h2", { className: classes.title }, "Make reservation"),
        react_1.default.createElement("form", { className: classes.form, onSubmit: handleSubmit },
            react_1.default.createElement(material_4.FormControl, null,
                react_1.default.createElement(LocalizationProvider_1.LocalizationProvider, { dateAdapter: AdapterDateFns_1.AdapterDateFns },
                    react_1.default.createElement(DateTimePicker_1.DateTimePicker, { renderInput: function (params) { return react_1.default.createElement(TextField_1.default, __assign({}, params)); }, label: 'Date', value: date, onChange: function (newDate) {
                            setDate(newDate);
                        }, minDate: new Date(nextDay), maxDate: new Date('2022-08-31'), minTime: new Date(0, 0, 0, 16, 0), maxTime: new Date(0, 0, 0, 22, 0) }))),
            react_1.default.createElement(material_4.FormControl, null,
                react_1.default.createElement(material_1.InputLabel, { id: 'select' }, "Booking for"),
                react_1.default.createElement(material_2.Select, { name: 'sits', id: 'select', value: guestsNum, label: 'Booking for', onChange: function (e) { return setGuestsNum(e.target.value); } }, seats.map(function (seat) { return (react_1.default.createElement(material_3.MenuItem, { value: seat, key: seat }, seat)); }))),
            react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                react_1.default.createElement(material_1.InputLabel, { htmlFor: 'firstName' }, "First Name"),
                react_1.default.createElement(Input_1.default, { id: 'firstName', name: 'firstName', value: firstName, onChange: function (e) { return setFirstName(e.target.value); }, inputProps: { maxLength: 20 } })),
            react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                react_1.default.createElement(material_1.InputLabel, { htmlFor: 'lastName' }, "Last Name"),
                react_1.default.createElement(Input_1.default, { id: 'lastName', name: 'lastName', value: lastName, onChange: function (e) { return setLastName(e.target.value); }, inputProps: { maxLength: 20 } })),
            react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                react_1.default.createElement(material_ui_phone_number_1.default, { defaultCountry: 'pl', regions: 'europe', name: 'number', label: 'Phone Number', value: number, onChange: setNumber })),
            react_1.default.createElement(material_4.FormControl, null,
                react_1.default.createElement(TextField_1.default, { name: 'notes', label: 'Notes...', className: classes.textField, multiline: true, inputProps: { maxLength: 200 }, rows: 4, value: text, onChange: function (e) { return setText(e.target.value); } })),
            react_1.default.createElement(material_5.Button, { className: classes.button, type: 'submit', fullWidth: true }, "BOOK NOW"))));
}
exports.default = (0, styles_1.withStyles)(ReservationFormStyles_1.default)(ReservationForm);
