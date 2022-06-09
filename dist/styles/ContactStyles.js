const styles = (theme) => ({
    contact: {
        overflow: 'scroll',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80vw',
        paddingTop: '75px',
        [theme.breakpoints.down('xxl')]: {
            width: '100vw',
            margin: 0,
        },
    },
    divider: {
        '&.MuiDivider-root': {
            width: '50vw',
            backgroundColor: 'brown',
            marginBottom: '5rem',
            [theme.breakpoints.down('sm')]: {
                margin: 0
            },
        },
    },
    title: {
        '&.MuiTypography-root': {
            letterSpacing: '0.5rem',
            [theme.breakpoints.down('xxl')]: {
                fontSize: '4rem',
            },
            [theme.breakpoints.down('xl')]: {
                fontSize: '3rem',
            },
            [theme.breakpoints.down('md')]: {
                fontSize: '2rem',
            },
        },
    },
    contentWrapper: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '5rem',
        gridTemplateAreas: '"a b"\r\n"c d"',
        [theme.breakpoints.down('xxl')]: {
            width: '90vw',
            gap: 1,
            margin: 0,
            padding: 0,
        },
        [theme.breakpoints.down('xl')]: {
            gridTemplateColumns: '100%',
            gridTemplateAreas: '"a"\r\n            "b"\r\n            "d"\r\n            "c"',
            placeItems: 'center',
        },
    },
    reservationForm: {
        paddingBottom: '15px',
        gridArea: 'c',
        [theme.breakpoints.down('xl')]: {
            margin: 0,
            marginBottom: '75px',
        },
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            width: '100vw',
        },
        '&:hover': {
            cursor: 'pointer',
        },
    },
    mapContainer: {
        width: '500px',
        height: '500px',
        borderRadius: '20px',
        overflow: 'hidden',
        gridArea: 'b',
        [theme.breakpoints.down('xl')]: {
            margin: 0,
        },
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            marginBottom: "10rem",
        },
        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: `0px 3px 1px -2px rgb(0 0 0 / 20%),
			 0px 2px 2px 0px rgb(0 0 0 / 14%), 
			 0px 1px 5px 0px rgb(0 0 0 / 12%)`,
        },
    },
    hours: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '500px',
        gridArea: 'a',
        [theme.breakpoints.down('xl')]: {
            height: '30vh',
            width: '80vw',
            margin: 0,
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '1rem',
            marginBottom: '2rem',
        },
    },
    textBox: {
        paddingTop: '10rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '500px',
        height: '500px',
        gridArea: 'd',
        [theme.breakpoints.down('xl')]: {
            width: '80vw',
            margin: 0,
        },
        [theme.breakpoints.down('md')]: {
            height: "50vh",
            padding: '2rem',
        },
    },
    textArea: {
        padding: '5rem',
        textAlign: 'center',
        width: '70%',
        height: "100%",
        [theme.breakpoints.down('xl')]: {
            width: "500px",
            height: "100px",
        },
        [theme.breakpoints.down('sm')]: {
            padding: '0 0',
            marginTop: "2rem",
            width: "90vw",
            height: "30vh"
        },
        '&.MuiTypography-root': {
            letterSpacing: '0.2rem',
            lineHeight: '2',
        },
        '& mark': {
            color: 'brown',
            backgroundColor: 'transparent',
            lineHeight: '2',
        },
    },
});
export default styles;
