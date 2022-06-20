"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a;
    return ({
        box: (_a = {
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '5rem',
                height: '50px',
                backgroundColor: 'white',
                width: '100vw',
                bottom: 0,
                left: 0,
                right: 0
            },
            _a[theme.breakpoints.down('md')] = {
                padding: 0,
            },
            _a),
        creditsWrapper: {
            display: 'flex',
            flexDirection: 'row',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji',
            letterSpacing: '0.1rem',
            height: '50%',
            fontSize: '10px',
            alignSelf: 'end',
            marginRight: '10rem',
            '& a': {
                color: 'black',
                paddingLeft: '4rem',
            },
        },
        links: {
            display: 'flex',
            flexDirection: 'column',
        },
    });
};
exports.default = styles;
