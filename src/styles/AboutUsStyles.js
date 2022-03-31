import Image from '../pictures/galleryBackground.png';
import TeamPhoto from '../pictures/sebastian-coman.jpg';
import PlacePhoto from '../pictures/steven-pecoraro.jpg';
import sizes from './sizes';
import CommentBackground from '../pictures/commentbackground.jpg';

const styles = {
	AboutUs: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'end',
		backgroundImage: `url(${Image})`,
		height: '100vh',
		width: '100vw',
		[sizes.down('xl')]:{
			display:"grid",
			gridTemplateColumns:"1fr 1fr",
		}
	},
	CommentsWrapper:{
		overflow:"scroll",
		height:"100vh",
		width:"25vw",
		width:"25vw",
		backgroundImage: `url(${CommentBackground})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		borderRadius:"10px",
		filter: 'grayscale(100%)',
		[sizes.down('xl')]:{
			height:"50vh",
		width:"50vw"},
		"&:hover":{
			filter: "grayscale(0%)",
		},
	},


	Box: {
		width: '25vw',
		height: '100vh',
		borderRadius: '10px',
		cursor: 'pointer',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'end',

		
'&:not(:hover)':{
			filter: 'grayscale(100%)',

},
[sizes.down('xl')]:{
height:"50vh",
width:"50vw",
		},
	},

	Team: {
		backgroundImage: `url(${TeamPhoto})`,
	},

	Place: {
		backgroundImage: `url(${PlacePhoto})`,
	},

	Paragraph: {
		'&.MuiTypography-root': {
			color: 'white',
			display: 'flex',
			paddingLeft: '1rem',
			fontSize: '1.5rem',
		},
	},
	BoxOpened:{
		width: '50vw',
		height: '90vh',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
	},



	Dialog: {
		display: 'flex',
		justifyContent: 'center',
	},

	Text: {
		marginLeft: '10rem',
		width: '30vw',
		height: '20vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '18px',
	},
};
export default styles;
