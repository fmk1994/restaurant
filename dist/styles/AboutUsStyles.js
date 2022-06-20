"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return ({
        aboutUs: (_a = {
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: '70px 70px 10rem 0',
                width: '80vw'
            },
            _a[theme.breakpoints.down('xxl')] = {
                width: '100vw',
                margin: 0,
                marginTop: '75px',
            },
            _a[theme.breakpoints.down('sm')] = {
                width: '95vw',
            },
            _a),
        title: {
            '&.MuiTypography-root': (_b = {
                    letterSpacing: '0.5rem'
                },
                _b[theme.breakpoints.up('xs')] = { fontSize: '2.5rem' },
                _b[theme.breakpoints.up('md')] = { fontSize: '3rem' },
                _b[theme.breakpoints.up('xl')] = { fontSize: '4rem' },
                _b),
        },
        divider: {
            '&.MuiDivider-root': (_c = {
                    width: '50vw',
                    backgroundColor: 'brown',
                    marginBottom: '10rem'
                },
                _c[theme.breakpoints.down('xl')] = { marginBottom: '2rem' },
                _c[theme.breakpoints.down('md')] = { marginBottom: '1rem' },
                _c),
        },
        contentWrapper: (_d = {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '10rem',
                gridTemplateAreas: '"a b"\r\n"c d"'
            },
            _d[theme.breakpoints.down('xxl')] = {
                width: '90vw',
                gap: 1,
                margin: 0,
                padding: 0,
            },
            _d[theme.breakpoints.down('xl')] = {
                display: 'grid',
                gridTemplateColumns: '100%',
                gridTemplateAreas: '"a"\r\n            "c"\r\n            "d"\r\n            "b"',
                placeItems: 'center',
            },
            _d),
        box: (_e = {
                width: '500px',
                height: '500px',
                margin: '2rem',
                borderRadius: '20px',
                cursor: 'pointer',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                display: 'flex',
                alignItems: 'end',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%),\n\t\t\t 0px 2px 2px 0px rgb(0 0 0 / 14%), \n\t\t\t 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                }
            },
            _e[theme.breakpoints.down('xl')] = {
                margin: 0,
            },
            _e[theme.breakpoints.down('sm')] = {
                width: '100vw',
            },
            _e),
        textArea: {
            '&.MuiTypography-root': (_f = {
                    display: 'flex',
                    alignItems: 'center',
                    width: '500px',
                    height: '500px',
                    margin: '2rem',
                    letterSpacing: '0.2rem',
                    lineHeight: '2',
                    justifyContent: 'flex-end',
                    '&.nth-child(even)': {
                        justifyContent: 'flex-end',
                    }
                },
                _f[theme.breakpoints.down('xl')] = {
                    margin: 0,
                },
                _f[theme.breakpoints.down('md')] = {
                    width: '450px',
                    height: '450px',
                },
                _f[theme.breakpoints.down('sm')] = {
                    width: '90vw',
                },
                _f),
        },
        gridThird: {
            gridArea: 'a',
        },
        gridFourth: {
            gridArea: 'd',
        },
        boxName: {
            '&.MuiTypography-root': {
                color: 'white',
                display: 'flex',
                paddingLeft: '1rem',
                fontSize: '1.5rem',
            },
        },
        dialog: {
            overflowX: 'hidden',
        },
        dialogContent: {
            '&.MuiDialogContent-root': (_g = {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    margin: 0,
                    paddingBottom: '32px',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                    width: '100%',
                    height: '700px'
                },
                _g[theme.breakpoints.down('xl')] = {
                    height: '600px',
                },
                _g[theme.breakpoints.down('lg')] = {
                    height: '500px',
                },
                _g[theme.breakpoints.down('md')] = {
                    height: '400px',
                    padding: 0,
                },
                _g[theme.breakpoints.down('sm')] = {
                    width: '100vw',
                    height: '40vh',
                },
                _g),
        },
        text: (_h = {
                letterSpacing: '0.1rem',
                fontWeight: '200',
                fontSize: '22px',
                color: 'black',
                width: '94%',
                alignSelf: 'center',
                padding: '2rem'
            },
            _h[theme.breakpoints.down('md')] = {
                color: 'black',
                fontSize: '20px',
            },
            _h),
    });
};
exports.default = styles;
