const styles = (theme) => ({
    details: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        minWidth: '500px',
        minHeight: '500px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '0',
        },
    },
    deliveryForm: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '300px',
    },
    pickUp: {
        height: '250px',
    },
    thankYouDialogContent: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '500px',
        minHeight: '500px',
        marginBottom: '20px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '0',
        },
        '& img': {
            marginTop: "15%",
            alignSelf: 'center',
            width: '300px',
            height: '300px',
            animation: 'tilt-shaking 2s linear infinite',
            [theme.breakpoints.down('md')]: {
                marginTop: "200px",
                width: '200px',
                height: '200px',
            },
        },
        '& a': {
            display: 'none',
        },
    },
    emptyOrderDialog: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '400px',
        minHeight: '400px',
        [theme.breakpoints.down('sm')]: {
            minWidth: '0',
        },
        '& img': {
            alignSelf: 'center',
            width: '220px',
            height: '220px',
            animation: 'tilt-shaking 2s linear infinite',
            [theme.breakpoints.down('sm')]: {
                width: '150px',
                height: '150px',
            },
        },
        '& a': {
            display: 'none',
        },
    },
    basket: {
        position: 'relative',
        margin: '1rem 2rem 1rem 3rem',
        transform: 'scale(1.3)',
        '&:hover': {
            transform: 'scale(1.5)',
            cursor: 'pointer',
        },
        [theme.breakpoints.down('sm')]: {
            margin: '1rem 3rem 1rem 3rem',
        },
    },
    basketIcon: {
        width: '20px',
        height: '20px',
    },
    counter: {
        position: 'absolute',
        left: '30px',
        top: '5px',
        zIndex: '2',
        fontSize: '10px',
    },
    '@global': {
        '@keyframes tilt-shaking': {
            '0%': {
                transform: 'rotate(0deg)',
            },
            '25%': {
                transform: 'rotate(5deg)',
            },
            '50%': {
                transform: 'rotate(0deg)',
            },
            '75%': {
                transform: 'rotate(-5deg)',
            },
            '100%': {
                transform: 'rotate(0deg)',
            },
        },
    },
    orderNames: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    orderNamesRows: {
        display: "flex",
        flexDirection: "column",
        listStyle: "none",
    },
});
export default styles;
