"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var material_1 = require("@mui/material");
var colors_1 = require("@mui/material/colors");
var theme = (0, material_1.createTheme)({
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'additional_bp', 'xl', 'xxl'],
        values: {
            xs: 0,
            sm: 576,
            md: 768,
            lg: 972,
            additional_bp: 1100,
            xl: 1200,
            xxl: 1440,
        },
    },
    palette: {
        primary: {
            main: colors_1.grey[900],
        },
        secondary: {
            main: colors_1.grey[700],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    backgroundColor: 'white',
                    opacity: '0.9',
                    '&:hover': {
                        transform: 'scale(1.15)',
                        backgroundColor: 'white',
                        opacity: '1',
                    },
                },
            },
        },
    },
    typography: {
        fontFamily: "\"Raleway\",\"Roboto\", sans-serif",
        h1: {
            fontSize: '4rem',
        },
    },
});
exports.default = theme;
