"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pic1_png_1 = require("../pictures/pic1.png");
var styles = function (theme) {
    var _a, _b;
    return ({
        mainPage: {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh',
            width: '98vw',
            backgroundRepeat: 'no-repeat',
            backgroundImage: "url(".concat(pic1_png_1.default, ")"),
            backgroundSize: 'cover',
            margin: 0,
            padding: 0,
            boxShadow: 'none',
            marginBottom: '10rem',
        },
        logoArea: {
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
        },
        logo: (_a = {
                width: '300px',
                height: '300px',
                borderRadius: '50%'
            },
            _a[theme.breakpoints.down('md')] = {
                transform: 'scale(0.8)',
            },
            _a),
        buttonsArea: {
            width: '100%',
            display: 'flex',
            fontSize: '4rem',
            color: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2rem',
        },
        mainButtons: {
            '&.MuiButton-root': (_b = {
                    margin: '20px',
                    backgroundColor: 'white',
                    color: 'black',
                    width: '300px',
                    height: '80px',
                    fontSize: '20px'
                },
                _b[theme.breakpoints.down('md')] = {
                    margin: '5px',
                },
                _b),
        },
    });
};
exports.default = styles;
