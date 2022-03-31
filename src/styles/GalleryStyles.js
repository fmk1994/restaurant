import Image from '../pictures/galleryBackground.png';
import sizes from './sizes.js';

const styles = {
	gallery: {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundImage: `url(${Image})`,
		transition: 'transform 0.5s ease',
		height: '100vh',
		width: '100vw',
		display: 'flex',
		alignItems: 'end',
		overflow: 'hidden',
	},
	textArea: {
		width: '40%',
		height: '85%',
		fontSize: '50px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		fontFamily: 'Roboto',
		flexDirection: 'column',
		[sizes.down('lgg')]: {
			justifyContent: 'space-around',
			width: '100%',
			height: '90vh',
		},
	},
	arrow: {
		[sizes.down('lgg')]: {
			display: 'none',
		},
	},
	bottomBox: {
		fontSize: '1.5rem',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '2rem',
		marginTop: '0',
	},

	galleryImages: {
		display: 'flex',
		width: '100vw',
		justifyContent: 'center',
		[sizes.down('md')]: {
			display: 'none',
		},
	},

	panel: {
		backgroundSize: 'auto 100%',
		backgroundPositionX: 'center',
		backgroundRepeat: 'no-repeat',
		height: '92vh',
		borderRadius: '50px',
		color: '#fff',
		cursor: 'pointer',
		flex: '0.1',
		margin: '5px',
		position: 'relative',
		transition: 'flex 0.7s ease-in',
	},
	active: {
		backgroundSize: 'cover',
		backgroundPositionX: 'center',
		backgroundRepeat: 'no-repeat',
		height: '92vh',
		borderRadius: '50px',
		color: '#fff',
		cursor: 'pointer',
		margin: '10px',
		position: 'relative',
		transition: 'flex 0.7s ease-in',
		flex: '4',
	},
};

export default styles;
