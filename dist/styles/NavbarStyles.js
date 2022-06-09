const styles = () => ({
    AppBar: {
        '&.MuiAppBar-root': {
            height: '75px',
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: 'white',
            color: 'black',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%)',
        },
    },
    menuButtons: {
        '&.MuiButtonBase-root': {
            color: 'black',
        },
    },
    Link: {
        textDecoration: 'none',
        padding: '0 1rem',
    },
    MenuItems: {
        '&.MuiMenuItem-root': {
            backgroundColor: 'transparent',
            color: 'black',
        },
    },
    Avatar: {
        cursor: 'pointer',
        transform: 'scale(1.2)',
        '&:hover': {
            transform: 'scale(1.5)',
        },
    },
});
export default styles;
