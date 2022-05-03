import Image from '../pictures/pic1.png';
import sizes from './sizes.js';
const styles = (theme) => ({
	mainPage: {
		display:"flex",
		justifyContent:"center",
		flexDirection: 'column',
		height: '100vh',
		width: '98vw',
		backgroundRepeat: 'no-repeat',
		backgroundImage: `url(${Image})`,
		backgroundSize: 'cover',
		margin: 0,
		padding: 0,
		boxShadow: 'none',
	},

	logoArea: {
		display: 'flex',
		justifyContent: 'center',
		transform: "scale(0.6)",
		width: '100%',
	},
	logo: {
		borderRadius: '50%',
		[sizes.down('md')]: {
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
		marginBottom:"100px"

	},
	
	mainButtons: {
		'&.MuiButton-root': {
			margin: '20px',
			backdropFilter: 'blur(10px) brightness(60%)',
			color: 'white',
			width: '300px',
			height: '80px',
			fontSize: '20px',
			[sizes.down('md')]: {
				margin: '20px',
			},
		},
	},
});

export default styles;
