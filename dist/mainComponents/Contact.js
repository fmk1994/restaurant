"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var ContactStyles_1 = require("../styles/ContactStyles");
var Map_1 = require("../data/Map");
var Typography_1 = require("@mui/material/Typography");
var Divider_1 = require("@mui/material/Divider");
var Box_1 = require("@mui/material/Box");
var ReservationForm_1 = require("./ReservationForm");
function Contact(props) {
    var classes = props.classes;
    return (react_1.default.createElement("div", { id: 'contact', className: classes.contact },
        react_1.default.createElement(Typography_1.default, { variant: 'h1', align: 'center', className: classes.title }, "CONTACT"),
        react_1.default.createElement(Divider_1.default, { className: classes.divider, variant: 'middle' }),
        react_1.default.createElement("div", { className: classes.contentWrapper },
            react_1.default.createElement("div", { className: classes.reservationForm },
                react_1.default.createElement(ReservationForm_1.default, null)),
            react_1.default.createElement("div", { className: classes.mapContainer },
                react_1.default.createElement(Map_1.default, null)),
            react_1.default.createElement(Box_1.default, { className: classes.hours },
                react_1.default.createElement(Typography_1.default, { className: classes.textArea },
                    "We", "'",
                    "re open from ",
                    react_1.default.createElement("mark", null, "Monday"),
                    " to ",
                    react_1.default.createElement("mark", null, "Sunday"),
                    ". Everyday from ",
                    react_1.default.createElement("mark", null, "16"),
                    " to ",
                    react_1.default.createElement("mark", null, "23"),
                    "."),
                react_1.default.createElement(Typography_1.default, { className: classes.textArea },
                    "If you have questions - call ",
                    react_1.default.createElement("mark", null, "+48-000-000-000"),
                    " or ask us via email ",
                    react_1.default.createElement("mark", null, "thegoodtaste@office123.com"))),
            react_1.default.createElement(Box_1.default, { className: classes.textBox },
                react_1.default.createElement(Typography_1.default, { className: classes.textArea },
                    "Please use the ",
                    react_1.default.createElement("mark", null, "booking form"),
                    ". Use ",
                    react_1.default.createElement("mark", null, "Notes"),
                    " to let us know if you have any ",
                    react_1.default.createElement("mark", null, "allergies"),
                    ". We have 15 tables for you to book. We recommend booking one of three balcony tables overlooking the city!")))));
}
exports.default = (0, styles_1.withStyles)(ContactStyles_1.default)(Contact);
