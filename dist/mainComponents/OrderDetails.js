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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var OrderDetailsStyles_1 = require("../styles/OrderDetailsStyles");
var uuid_1 = require("uuid");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var material_3 = require("@mui/material");
var material_4 = require("@mui/material");
var Box_1 = require("@mui/material/Box");
var Input_1 = require("@mui/material/Input");
var Button_1 = require("@mui/material/Button");
var Dialog_1 = require("@mui/material/Dialog");
var DialogActions_1 = require("@mui/material/DialogActions");
var DialogContent_1 = require("@mui/material/DialogContent");
var DialogContentText_1 = require("@mui/material/DialogContentText");
var DialogTitle_1 = require("@mui/material/DialogTitle");
var RadioGroup_1 = require("@mui/material/RadioGroup");
var material_ui_phone_number_1 = require("material-ui-phone-number");
var useMediaQuery_1 = require("@mui/material/useMediaQuery");
var TotalPriceContext_1 = require("../contexts/TotalPriceContext");
var MenuContext_1 = require("../contexts/MenuContext");
var material_5 = require("@mui/material");
var styles_2 = require("@mui/material/styles");
var shoppingbasket_jpg_1 = require("../pictures/shoppingbasket.jpg");
var cooking_png_1 = require("../pictures/cooking.png");
var empty_cart_png_1 = require("../pictures/empty-cart.png");
var data_json_1 = require("../menu/data.json");
function OrderDetails(props) {
    var initialFormData = Object({
        deliveryMethod: '',
        adress: '',
        number: '',
        firstName: '',
        lastName: '',
        paymentMethod: '',
    });
    var classes = props.classes;
    var _a = (0, react_1.useState)(initialFormData), formData = _a[0], setFormData = _a[1];
    var _b = (0, react_1.useState)('delivery'), deliveryMethod = _b[0], setDeliveryMethod = _b[1];
    var _c = (0, react_1.useState)('cash'), paymentMethod = _c[0], setPaymentMethod = _c[1];
    var _d = (0, react_1.useState)(''), adress = _d[0], setAdress = _d[1];
    var _e = (0, react_1.useState)(''), number = _e[0], setNumber = _e[1];
    var _f = (0, react_1.useState)(''), firstName = _f[0], setFirstName = _f[1];
    var _g = (0, react_1.useState)(''), lastName = _g[0], setLastName = _g[1];
    var _h = (0, react_1.useState)(false), open = _h[0], setOpen = _h[1];
    var _j = (0, react_1.useState)([]), orderNames = _j[0], setOrderNames = _j[1];
    var _k = (0, react_1.useState)(false), openThanksPage = _k[0], setOpenThanksPage = _k[1];
    var theme = (0, styles_2.useTheme)();
    var fullScreen = (0, useMediaQuery_1.default)(theme.breakpoints.down('md'));
    var totalPrice = (0, react_1.useContext)(TotalPriceContext_1.TotalPriceContext).totalPrice;
    var items = (0, react_1.useContext)(MenuContext_1.MenuContext)[0];
    var names = [];
    var index = [];
    var dishesArray = [];
    var mains = data_json_1.default.mains, drinks = data_json_1.default.drinks, sides = data_json_1.default.sides;
    mains.map(function (name) {
        names.push(name.name);
        index.push(name.index);
    });
    drinks.map(function (name) {
        names.push(name.name);
        index.push(name.index);
    });
    sides.map(function (name) {
        names.push(name.name);
        index.push(name.index);
    });
    for (var _i = 0, _l = Object.entries(items); _i < _l.length; _i++) {
        var _m = _l[_i], key = _m[0], value = _m[1];
        if (value !== 0) {
            var dish = "".concat(key);
            dishesArray.push(dish);
        }
    }
    function handleOrderNames() {
        if (dishesArray.length === 0) {
            return null;
        }
        else {
            dishesArray.map(function (element) {
                if (orderNames.includes(names[index.indexOf(element)])) {
                    return orderNames;
                }
                else {
                    setOrderNames(__spreadArray(__spreadArray([], orderNames, true), [names[index.indexOf(element)]], false));
                }
            });
        }
    }
    var mealsCounter = Object.values(items).filter(function (number) {
        return number > 0;
    });
    (0, react_1.useEffect)(function () {
        handleOrderNames();
    }, [items]);
    var handleOpen = (0, react_1.useCallback)(function () {
        setOpen(true);
    }, []);
    var handleClose = (0, react_1.useCallback)(function () {
        setOpen(false);
        setOpenThanksPage(false);
    }, []);
    var handleThanksPage = function () {
        setTimeout(function () {
            setOpen(false);
            setOpenThanksPage(true);
        }, 500);
    };
    var handleSubmit = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        setFormData({
            deliveryMethod: deliveryMethod,
            adress: adress,
            number: number,
            firstName: firstName,
            lastName: lastName,
            paymentMethod: paymentMethod,
        });
        handleThanksPage();
        setTimeout(function () {
            alert(JSON.stringify(__assign(__assign({}, formData), dishesObject)));
        }, 1500);
    }, [formData]);
    (0, react_1.useEffect)(function () {
        setFormData({
            deliveryMethod: deliveryMethod,
            adress: adress,
            number: number,
            firstName: firstName,
            lastName: lastName,
            paymentMethod: paymentMethod,
        });
    }, [deliveryMethod, adress, number, firstName, lastName, paymentMethod]);
    var dishesObject = {};
    orderNames.forEach(function (element, index) {
        dishesObject[element] = mealsCounter[index];
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Box_1.default, { className: classes.basket, onClick: handleOpen },
            react_1.default.createElement("img", { className: classes.basketIcon, src: shoppingbasket_jpg_1.default }),
            react_1.default.createElement("div", { className: classes.counter }, "(".concat(totalPrice, "$)"))),
        react_1.default.createElement(Dialog_1.default, { fullScreen: fullScreen, open: open, onClose: handleClose, "aria-labelledby": 'order-details-dialog' },
            totalPrice === 0 && (react_1.default.createElement(Dialog_1.default, { fullScreen: fullScreen, open: open, onClose: handleClose, "aria-labelledby": 'empty-order-dialog' },
                react_1.default.createElement(DialogTitle_1.default, null, "Empty Order!"),
                react_1.default.createElement(DialogContent_1.default, { className: classes.emptyOrderDialog },
                    react_1.default.createElement("img", { src: empty_cart_png_1.default })),
                react_1.default.createElement(DialogActions_1.default, null,
                    react_1.default.createElement(Button_1.default, { onClick: handleClose }, "Cancel")))),
            totalPrice !== 0 && (react_1.default.createElement("form", { onSubmit: handleSubmit },
                react_1.default.createElement(DialogTitle_1.default, { id: 'order-details-dialog' }, 'Details of your order'),
                react_1.default.createElement(DialogContent_1.default, { className: classes.details },
                    react_1.default.createElement(DialogContentText_1.default, null, 'How do you want to get your food?'),
                    react_1.default.createElement(material_4.FormControl, { required: true },
                        react_1.default.createElement(RadioGroup_1.default, { row: true, value: deliveryMethod, onChange: function (e) { return setDeliveryMethod(e.target.value); }, "aria-labelledby": 'delivery-method' },
                            react_1.default.createElement(material_3.FormControlLabel, { value: 'delivery', className: classes.button, label: 'delivery', control: react_1.default.createElement(material_5.Radio, { color: 'secondary', size: 'small' }) }, "Delivery"),
                            react_1.default.createElement(material_3.FormControlLabel, { value: 'pick-up', className: classes.button, label: 'pick-up', control: react_1.default.createElement(material_5.Radio, { color: 'secondary', size: 'small' }) }, "Pick up"))),
                    react_1.default.createElement(DialogContentText_1.default, null, 'Estimated delivery time: 30-60 min'),
                    deliveryMethod === 'delivery' && (react_1.default.createElement(Box_1.default, { className: classes.deliveryForm },
                        react_1.default.createElement(material_4.FormControl, { required: true },
                            react_1.default.createElement(material_1.InputLabel, { htmlFor: 'deliveryAdress' }, "Delivery Adress"),
                            react_1.default.createElement(Input_1.default, { id: 'deliveryAdress', name: 'Delivery Adress', value: adress, onChange: function (e) { return setAdress(e.target.value); }, inputProps: { maxLength: 100 } })),
                        react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                            react_1.default.createElement(material_1.InputLabel, { htmlFor: 'firstName' }, "First Name"),
                            react_1.default.createElement(Input_1.default, { id: 'firstName', name: 'firstName', value: firstName, onChange: function (e) { return setFirstName(e.target.value); }, inputProps: { maxLength: 20 } })),
                        react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                            react_1.default.createElement(material_1.InputLabel, { htmlFor: 'lastName' }, "Last Name"),
                            react_1.default.createElement(Input_1.default, { id: 'lastName', name: 'lastName', value: lastName, onChange: function (e) { return setLastName(e.target.value); }, inputProps: { maxLength: 20 } })),
                        react_1.default.createElement(material_4.FormControl, { margin: 'normal', required: true },
                            react_1.default.createElement(material_ui_phone_number_1.default, { defaultCountry: 'pl', regions: 'europe', name: 'number', label: 'Phone Number', value: number, onChange: setNumber })))),
                    deliveryMethod === 'pick-up' && (react_1.default.createElement(Box_1.default, { className: classes.pickUp },
                        react_1.default.createElement(material_2.Typography, null, 'Pick up adress: Gdynia, ul. Legionów 102A/32'))),
                    react_1.default.createElement(DialogContentText_1.default, null, 'How do you want to pay?'),
                    react_1.default.createElement(material_4.FormControl, { required: true },
                        react_1.default.createElement(RadioGroup_1.default, { row: true, value: paymentMethod, onChange: function (e) { return setPaymentMethod(e.target.value); }, "aria-labelledby": 'payment-method' },
                            react_1.default.createElement(material_3.FormControlLabel, { value: 'cash', className: classes.button, label: 'cash', control: react_1.default.createElement(material_5.Radio, { color: 'secondary', size: 'small' }) }, "Cash"),
                            react_1.default.createElement(material_3.FormControlLabel, { value: 'card', className: classes.button, label: 'card', control: react_1.default.createElement(material_5.Radio, { color: 'secondary', size: 'small' }) }, "Card")))),
                react_1.default.createElement(DialogActions_1.default, null,
                    react_1.default.createElement(Button_1.default, { onClick: handleClose }, "Cancel"),
                    react_1.default.createElement(Button_1.default, { type: 'submit' }, "Order"))))),
        react_1.default.createElement(Dialog_1.default, { fullScreen: fullScreen, open: openThanksPage, onClose: handleClose, "aria-labelledby": 'thank-you-dialog' },
            react_1.default.createElement(DialogTitle_1.default, { id: 'thank-you-dialog' }, "Thank you for the order!"),
            react_1.default.createElement(DialogContent_1.default, { className: classes.thankYouDialogContent }, "You've ordered:",
                react_1.default.createElement("div", { className: classes.orderNames },
                    react_1.default.createElement("ul", { className: classes.orderNamesRows }, orderNames.map(function (key) {
                        return react_1.default.createElement("li", { key: key }, key);
                    })),
                    react_1.default.createElement("ul", { className: classes.orderNamesRows }, mealsCounter.map(function (value) {
                        return react_1.default.createElement("li", { key: (0, uuid_1.v4)() }, "x ".concat(value));
                    }))),
                react_1.default.createElement(DialogContentText_1.default, null, 'Estimated delivery/pick up time 30-60 min.'),
                react_1.default.createElement("img", { src: cooking_png_1.default })),
            react_1.default.createElement(DialogActions_1.default, null,
                react_1.default.createElement(Button_1.default, { onClick: handleClose }, "Close")))));
}
exports.default = (0, styles_1.withStyles)(OrderDetailsStyles_1.default)(OrderDetails);
