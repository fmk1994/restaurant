"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a, _b, _c, _d, _e;
    return ({
        commentsWrapper: (_a = {
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                margin: '75px 70px 10rem 0',
                paddingTop: '75px'
            },
            _a[theme.breakpoints.down('md')] = {
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
                    margin: '2rem',
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
        comments: (_d = {
                overflowY: 'hidden',
                display: 'flex',
                flexDirection: 'row',
                width: '80vw',
                overflowX: 'scroll',
                padding: '20px'
            },
            _d[theme.breakpoints.down('md')] = {
                height: '70vh',
                width: '100%',
                alignItems: 'center',
                flexDirection: 'column',
                overflowY: 'scroll',
                overflowX: 'hidden',
                margin: 0,
            },
            _d['&::-webkit-scrollbar'] = {
                display: 'inline',
                height: '10px',
                scrollbarHeight: '30vw',
                borderRadius: '20px',
                backgroundColor: 'white',
                border: '0.1px solid rgb(228, 237, 234)',
            },
            _d['&::-webkit-scrollbar-thumb'] = {
                border: '1px solid black',
                borderRadius: '20px',
                scrollbarWidth: '10px',
                width: '10px',
                height: '10px',
            },
            _d),
        commentFormWrapper: (_e = {
                width: '30vw'
            },
            _e[theme.breakpoints.down('xl')] = {
                width: '90vw',
            },
            _e),
        commentFormTitle: {
            marginTop: '3rem',
            fontStyle: 'italic',
            textAlign: 'center',
        },
    });
};
exports.default = styles;
