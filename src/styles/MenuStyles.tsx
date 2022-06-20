import { CSSProperties } from '@emotion/serialize';
import { Theme } from '@mui/material';
import { Styles } from '@mui/styles';
const styles: Styles<Theme, CSSProperties> = (theme) => ({
	Menu: {
		color: 'grey',
		fontFamily:
			'-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial,sans-serif, Apple Color Emoji, Segoe UI Emoji',
		padding: '75px 2.25rem 1rem',
		lineHeight: '1.5',
		letterSpacing: 0,
		margin: '0 0 10rem 0',
		maxWidth: '60rem',
		backgroundColor: 'white',
		[theme.breakpoints.up('md')]: {
			display: 'grid',
			gridGap: '4rem',
			gridTemplateColumns: '1fr 1fr',
		},
	},
	Aside: {
		gridColumn: '2/3',
	},
	Logo: {
		width: '280px',
		margin: '0 auto 2rem',
		display: 'block',
		borderRadius: '50%',
		gridColumn: '1 / 3',
		[theme.breakpoints.up('md')]: {
			marginBottom: '0',
		},
	},
	button: {
		'&.MuiButton-root': {
			margin: '20px',

			backdropFilter: 'blur(10px) brightness(60%)',

			color: 'white',
			width: '300px',
			height: '80px',
			fontSize: '20px',
		},
	},
});

export default styles;
