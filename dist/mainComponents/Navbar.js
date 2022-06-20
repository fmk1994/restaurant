"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styles_1 = require("@mui/styles");
var NavbarStyles_1 = require("../styles/NavbarStyles");
var AppBar_1 = require("@mui/material/AppBar");
var Box_1 = require("@mui/material/Box");
var Toolbar_1 = require("@mui/material/Toolbar");
var IconButton_1 = require("@mui/material/IconButton");
var Menu_1 = require("@mui/icons-material/Menu");
var Container_1 = require("@mui/material/Container");
var Avatar_1 = require("@mui/material/Avatar");
var Button_1 = require("@mui/material/Button");
var MenuItem_1 = require("@mui/material/MenuItem");
var ikona_png_1 = require("../pictures/ikona.png");
var Popover_1 = require("@mui/material/Popover");
var OrderDetails_1 = require("./OrderDetails");
var react_scroll_1 = require("react-scroll");
var pages = ['Menu', 'About Us', 'Gallery', 'Comments', 'Contact'];
var Navbar = function (_a) {
    var classes = _a.classes;
    var handleAvataronClick = (0, react_1.useCallback)(function () {
        react_scroll_1.animateScroll.scrollToTop();
    }, []);
    var _b = (0, react_1.useState)(null), anchorElNav = _b[0], setAnchorElNav = _b[1];
    var handleOpenNavMenu = (0, react_1.useCallback)(function (event) {
        setAnchorElNav(event.currentTarget);
    }, []);
    var handleCloseNavMenu = (0, react_1.useCallback)(function () {
        setAnchorElNav(null);
    }, []);
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement(AppBar_1.default, { className: classes.AppBar, position: 'fixed' },
            react_1.default.createElement(Container_1.default, { maxWidth: 'lg' },
                react_1.default.createElement(Toolbar_1.default, { className: classes.toolbar },
                    react_1.default.createElement(Avatar_1.default, { className: classes.Avatar, onClick: handleAvataronClick, src: ikona_png_1.default, sx: { mr: 7, display: { xs: 'none', lg: 'flex' } } }),
                    react_1.default.createElement(Box_1.default, { sx: {
                            flexGrow: 1,
                            display: { xs: 'flex', lg: 'none' },
                        } },
                        react_1.default.createElement(IconButton_1.default, { size: 'large', "aria-label": 'account of current user', "aria-controls": 'menu-appbar', "aria-haspopup": 'true', onClick: handleOpenNavMenu, color: 'inherit' },
                            react_1.default.createElement(Menu_1.default, { className: classes.MenuIcon })),
                        react_1.default.createElement(Popover_1.default, { className: 'popover', id: 'menu-appbar', anchorEl: anchorElNav, anchorOrigin: {
                                vertical: 'bottom',
                                horizontal: 'left',
                            }, keepMounted: true, transformOrigin: {
                                vertical: 'top',
                                horizontal: 'left',
                            }, open: Boolean(anchorElNav), onClose: handleCloseNavMenu, sx: {
                                display: { xs: 'block', lg: 'none' },
                            } }, pages.map(function (page) { return (react_1.default.createElement(react_scroll_1.Link, { spy: true, smooth: true, offset: 0, duration: 500, activeClass: 'active', className: classes.Link, underline: 'none', to: "".concat(page.toLowerCase().replace(' ', '-')), key: page.toLowerCase().replace('ó', 'o').replace(' ', '-') },
                            react_1.default.createElement(MenuItem_1.default, { className: classes.MenuItems, key: page, onClick: handleCloseNavMenu }, page.toUpperCase()))); }))),
                    react_1.default.createElement(Avatar_1.default, { className: classes.Avatar, onClick: handleAvataronClick, src: ikona_png_1.default, sx: { flexGrow: 0, display: { xs: 'flex', lg: 'none' } } }),
                    react_1.default.createElement(Box_1.default, { sx: {
                            flexGrow: 1,
                            display: { xs: 'none', lg: 'flex' },
                        } }, pages.map(function (page) { return (react_1.default.createElement(react_scroll_1.Link, { spy: true, smooth: true, offset: 0, duration: 500, activeClass: 'active', className: classes.Link, underline: 'none', to: "".concat(page.toLowerCase().replace(' ', '-')), key: page.toLowerCase().replace(' ', '-') },
                        react_1.default.createElement(Button_1.default, { className: classes.menuButtons, onClick: handleCloseNavMenu, sx: { my: 2, display: 'block' } }, page))); })),
                    react_1.default.createElement(OrderDetails_1.default, null))))));
};
exports.default = (0, styles_1.withStyles)(NavbarStyles_1.default)(Navbar);
