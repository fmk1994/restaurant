"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a, _b;
    return ({
        comment: (_a = {
                minWidth: '300px',
                maxWidth: '350px',
                maxHeight: '500px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                margin: '0 2rem 0 2rem',
                overflow: 'auto',
                padding: '5px',
                borderRadius: '15px',
                boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%),\n\t\t\t 0px 2px 2px 0px rgb(0 0 0 / 14%), \n\t\t\t 0px 1px 5px 0px rgb(0 0 0 / 12%)",
                '&:hover': {
                    transform: 'scale(1.02)',
                }
            },
            _a[theme.breakpoints.down('xl')] = {
                margin: '0 1rem 0 1rem',
            },
            _a[theme.breakpoints.down('md')] = {
                margin: '0.5rem 0 0.5rem 0',
                width: '80%',
                overflow: 'visible',
            },
            _a),
        divider: {
            backgroundColor: 'brown',
            marginBottom: '20px',
        },
        commentData: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            margin: '2rem 3rem 2rem 2rem',
            textTransform: 'uppercase',
        },
        publishDate: {
            fontSize: '1rem',
            fontStyle: 'italic',
            alignSelf: 'flex-end',
        },
        author: {
            letterSpacing: '0.2rem',
            fontSize: '2rem',
            marginBottom: '2rem',
            overflowX: 'hidden',
            fontWeight: '400',
        },
        content: (_b = {
                wordWrap: 'break-word',
                fontSize: '3rem',
                margin: '1rem',
                lineHeight: '5rem',
                letterSpacing: '2px',
                fontFamily: "'Amatic SC', cursive",
                overflow: 'scroll'
            },
            _b[theme.breakpoints.down('md')] = {
                height: '50vh',
                width: '80%',
                fontSize: '3rem',
                lineHeight: '3rem',
            },
            _b),
        commentActions: {
            display: 'flex',
            justifyContent: 'space-around',
            marginBottom: '2rem',
        },
        actionButton: {
            '&.MuiButton-root': {
                backgroundColor: 'transparent',
                border: '1px solid black',
                color: 'black',
                width: '5rem',
                height: '3rem',
                fontSize: '1rem',
                '&:hover': {
                    transform: 'scale(1.15)',
                    backgroundColor: 'transparent',
                },
            },
        },
    });
};
exports.default = styles;
