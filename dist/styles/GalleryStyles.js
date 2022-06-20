"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a, _b, _c;
    return ({
        gallery: (_a = {
                display: 'flex',
                overflow: 'hidden',
                height: '100vh',
                width: '98vw',
                justifyContent: 'center',
                alignItems: 'end',
                transition: 'transform 0.5s ease'
            },
            _a[theme.breakpoints.down('xl')] = {
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                overflow: 'scroll',
                paddingTop: '70px',
            },
            _a),
        title: {
            marginBottom: '70px',
        },
        panel: (_b = {
                backgroundSize: 'auto 100%',
                backgroundPositionX: 'center',
                backgroundRepeat: 'no-repeat',
                height: '82vh',
                borderRadius: '50px',
                color: '#fff',
                cursor: 'pointer',
                flex: '0.2',
                margin: '5px 5px 70px 5px',
                position: 'relative',
                transition: 'flex 0.7s ease-in-out'
            },
            _b[theme.breakpoints.down('xl')] = {
                width: '90vw',
                height: '20vh',
                margin: 0,
                marginBottom: '10px',
                backgroundSize: '100% auto',
                borderRadius: '40px',
                backgroundPositionY: 'center',
            },
            _b[theme.breakpoints.down('md')] = {
                marginBottom: '20px',
            },
            _b[theme.breakpoints.down('sm')] = {
                marginBottom: '25px',
            },
            _b),
        active: (_c = {
                flex: '2'
            },
            _c[theme.breakpoints.down('xl')] = {
                flex: '70%',
            },
            _c[theme.breakpoints.down('additional_bp')] = {
                flex: '50%',
            },
            _c[theme.breakpoints.down('lg')] = {
                flex: '30%',
            },
            _c[theme.breakpoints.down('md')] = {
                flex: '20%',
            },
            _c[theme.breakpoints.down('sm')] = {
                flex: '5%',
            },
            _c),
    });
};
exports.default = styles;
