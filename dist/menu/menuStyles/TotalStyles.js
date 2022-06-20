"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = function (theme) {
    var _a;
    return ({
        Total: (_a = {
                gridColumn: '1 / 3',
                marginTop: '0.5rem',
                padding: '0.75rem 0 1.25rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                position: 'sticky',
                bottom: '50px',
                color: 'black',
                backgroundColor: 'white',
                borderTop: '1px solid black',
                boxshadow: '0 0.5rem 0.75rem 0.5rem white'
            },
            _a[theme.breakpoints.up('sm')] = {
                margintop: '0',
            },
            _a),
        TotalTitle: {
            margin: '0',
            fontSize: '1.5rem',
        },
        TotalPrice: {
            fontSize: '1.5rem',
        },
    });
};
exports.default = styles;
