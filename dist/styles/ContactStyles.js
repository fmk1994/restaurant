"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return ({
        contact: (_a = {
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '80vw',
                paddingTop: '75px'
            },
            _a[theme.breakpoints.down('xxl')] = {
                width: '100vw',
                margin: 0,
            },
            _a),
        divider: {
            '&.MuiDivider-root': (_b = {
                    width: '50vw',
                    backgroundColor: 'brown',
                    marginBottom: '5rem'
                },
                _b[theme.breakpoints.down('sm')] = {
                    margin: 0,
                },
                _b),
        },
        title: {
            '&.MuiTypography-root': (_c = {
                    letterSpacing: '0.5rem'
                },
                _c[theme.breakpoints.down('xxl')] = {
                    fontSize: '4rem',
                },
                _c[theme.breakpoints.down('xl')] = {
                    fontSize: '3rem',
                },
                _c[theme.breakpoints.down('md')] = {
                    fontSize: '2rem',
                },
                _c),
        },
        contentWrapper: (_d = {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '5rem',
                gridTemplateAreas: '"a b"\r\n"c d"'
            },
            _d[theme.breakpoints.down('xxl')] = {
                width: '90vw',
                gap: 1,
                margin: 0,
                padding: 0,
            },
            _d[theme.breakpoints.down('xl')] = {
                gridTemplateColumns: '100%',
                gridTemplateAreas: '"a"\r\n            "b"\r\n            "d"\r\n            "c"',
                placeItems: 'center',
            },
            _d),
        reservationForm: (_e = {
                paddingBottom: '15px',
                gridArea: 'c'
            },
            _e[theme.breakpoints.down('xl')] = {
                margin: 0,
                marginBottom: '75px',
            },
            _e[theme.breakpoints.down('sm')] = {
                display: 'flex',
                width: '100vw',
            },
            _e['&:hover'] = {
                cursor: 'pointer',
            },
            _e),
        mapContainer: (_f = {
                width: '500px',
                height: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                gridArea: 'b'
            },
            _f[theme.breakpoints.down('xl')] = {
                margin: 0,
            },
            _f[theme.breakpoints.down('sm')] = {
                width: '100vw',
                marginBottom: '10rem',
            },
            _f['&:hover'] = {
                transform: 'scale(1.02)',
                boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%),\n\t\t\t 0px 2px 2px 0px rgb(0 0 0 / 14%), \n\t\t\t 0px 1px 5px 0px rgb(0 0 0 / 12%)",
            },
            _f),
        hours: (_g = {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '500px',
                height: '500px',
                gridArea: 'a'
            },
            _g[theme.breakpoints.down('xl')] = {
                height: '30vh',
                width: '80vw',
                margin: 0,
            },
            _g[theme.breakpoints.down('md')] = {
                marginTop: '1rem',
                marginBottom: '2rem',
            },
            _g),
        textBox: (_h = {
                paddingTop: '10rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '500px',
                height: '500px',
                gridArea: 'd'
            },
            _h[theme.breakpoints.down('xl')] = {
                width: '80vw',
                margin: 0,
            },
            _h[theme.breakpoints.down('md')] = {
                height: '50vh',
                padding: '2rem',
            },
            _h),
        textArea: (_j = {
                padding: '5rem',
                textAlign: 'center',
                width: '70%',
                height: '100%'
            },
            _j[theme.breakpoints.down('xl')] = {
                width: '500px',
                height: '100px',
            },
            _j[theme.breakpoints.down('sm')] = {
                padding: '0 0',
                marginTop: '2rem',
                width: '90vw',
                height: '30vh',
            },
            _j['&.MuiTypography-root'] = {
                letterSpacing: '0.2rem',
                lineHeight: '2',
            },
            _j['& mark'] = {
                color: 'brown',
                backgroundColor: 'transparent',
                lineHeight: '2',
            },
            _j),
    });
};
exports.default = styles;
