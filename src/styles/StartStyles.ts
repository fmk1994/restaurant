import Image from '../pictures/pic1.png';
const styles = (theme) => ({
	mainPage: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '100vh',
		width: '98vw',
		backgroundRepeat: 'no-repeat',
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		margin: 0,
		padding: 0,
		boxShadow: 'none',
		marginBottom: '10rem',
	},

	logoArea: {
		display: 'flex',
		justifyContent: 'center',
		width: '100%',
	},
	logo: {
		width:"300px",
		height:"300px",
		borderRadius: '50%',

		[theme.breakpoints.down('md')]: {
			transform: 'scale(0.8)',
		},
	},

	buttonsArea: {
		width: '100%',
		display: 'flex',
		fontSize: '4rem',
		color: 'white',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent:"center",
		marginTop:"2rem",
		
	},

	mainButtons: {
		'&.MuiButton-root': {
			margin: '20px',
			backgroundColor: 'white',
			color: 'black',
			width: '300px',
			height: '80px',
			fontSize: '20px',
			[theme.breakpoints.down('md')]: {
				margin: '5px',
			},
		},
	},
});

export default styles;
