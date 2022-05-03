const styles = (theme) => ({
	AppBar: {
		'&.MuiAppBar-root': {
			boxShadow: 'none',
			height: '70px',
			display: 'flex',
			justifyContent: 'space-around',
			backgroundColor: 'white',
			color: 'black',
		},
	},
	menuButtons: {
		'&.MuiButtonBase-root': {
			color: 'black',
		},
	},

	Link: {
		textDecoration: 'none',
		padding: '0 3rem',
	},

	MenuItems: {
		'&.MuiMenuItem-root': {
			backgroundColor: 'transparent',
			color: 'black',
		},
	},

	Avatar: {
		cursor: 'pointer',
		transform: 'scale(1.5)',
		'&:hover': {
			transform: 'scale(1.7)',
		},
	},
	basket: {
		
		position:"relative",
		marginLeft: '3rem',
		'&:hover': {
			transform: 'scale(1.3)',
		},
	},
	counter:{
position:"absolute",
left:"30px",
top:"5px",
zIndex:"2",
fontSize:"10px"

	},
});
export default styles;
