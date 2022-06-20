import { CSSProperties } from '@emotion/serialize';
import { Theme } from '@mui/material';
import { Styles } from '@mui/styles';
const styles: Styles<Theme, CSSProperties> = (theme) => ({
	box: {
		display: 'flex',
		justifyContent: 'space-between',
		paddingLeft: '5rem',
		height: '50px',
		backgroundColor: 'white',
		width: '100vw',
		bottom: 0,
		left: 0,
		right: 0,
		[theme.breakpoints.down('md')]: {
			padding: 0,
		},
	},
	creditsWrapper: {
		display: 'flex',
		flexDirection: 'row',
		fontFamily:
			'-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji',
		letterSpacing: '0.1rem',
		height: '50%',
		fontSize: '10px',
		alignSelf: 'end',
		marginRight: '10rem',
		'& a': {
			color: 'black',
			paddingLeft: '4rem',
		},
	},
	links: {
		display: 'flex',
		flexDirection: 'column',
	},
});

export default styles;
