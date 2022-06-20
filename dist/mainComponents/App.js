"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Gallery_1 = require("./Gallery");
var Contact_1 = require("./Contact");
var Start_1 = require("./Start");
var Menu_1 = require("./Menu");
var AboutUs_1 = require("./AboutUs");
var Navbar_1 = require("./Navbar");
var Footer_1 = require("./Footer");
var Comments_1 = require("./Comments");
var styles_1 = require("@mui/material/styles");
var createTheme_1 = require("../styles/createTheme");
var TotalPriceContext_1 = require("../contexts/TotalPriceContext");
var MenuContext_1 = require("../contexts/MenuContext");
var styles_2 = require("@mui/styles");
var AppStyles_1 = require("../styles/AppStyles");
var App = function (_a) {
    var classes = _a.classes;
    return (react_1.default.createElement(styles_1.ThemeProvider, { theme: createTheme_1.default },
        react_1.default.createElement(MenuContext_1.MenuProvider, null,
            react_1.default.createElement("main", { className: classes.main },
                react_1.default.createElement(TotalPriceContext_1.TotalPriceContextProvider, null,
                    react_1.default.createElement(Navbar_1.default, null),
                    react_1.default.createElement(Start_1.default, null),
                    react_1.default.createElement(Menu_1.default, null),
                    react_1.default.createElement(AboutUs_1.default, null),
                    react_1.default.createElement(Gallery_1.default, null),
                    react_1.default.createElement(Comments_1.default, null),
                    react_1.default.createElement(Contact_1.default, null),
                    react_1.default.createElement(Footer_1.default, null))))));
};
exports.default = (0, styles_2.withStyles)(AppStyles_1.default)(App);
