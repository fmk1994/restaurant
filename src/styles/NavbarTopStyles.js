import sizes from './sizes';

const styles = {
	'@global': {
        '.popover': {
			color:"white",
            '& > .MuiPaper-root': {
                backgroundColor: 'transparent',
				backdropFilter: 'blur(20px) brightness(100%)',
            }
        },
    },
	AppBar: {
		'&.MuiAppBar-root': {
			backdropFilter: 'blur(20px) brightness(100%)',
			height: '70px',
			display: 'flex',
			justifyContent: 'space-between',
		},
	},

	menuButtons: {
		'&.MuiButtonBase-root': {
			color: 'white',
		},
	},

	Link: {
		textDecoration: 'none',
		backgroundColor: 'transparent',
		'&:hover': {
			transform: 'scale(1.15)',
		},
	},

	MenuItems: {
		'&.MuiMenuItem-root': {
			backgroundColor: 'transparent',
			color:'white',
		},
	},



	MenuIcon: {
		color: 'white',
	},

	Avatar: {
		cursor: 'pointer',
		'&:hover': {
			transform: 'scale(1.25)',
		},
	},
};
export default styles;
