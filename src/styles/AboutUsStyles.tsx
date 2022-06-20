import { CSSProperties } from '@emotion/serialize';
import { Theme } from '@mui/material';
import { Styles } from '@mui/styles';
const styles: Styles<Theme, CSSProperties> = (theme) => ({
	aboutUs: {
		overflow: 'scroll',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '70px 70px 10rem 0',
		width: '80vw',
		[theme.breakpoints.down('xxl')]: {
			width: '100vw',
			margin: 0,
			marginTop: '75px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '95vw',
		},
	},
	title: {
		'&.MuiTypography-root': {
			letterSpacing: '0.5rem',
			[theme.breakpoints.up('xs')]: { fontSize: '2.5rem' },
			[theme.breakpoints.up('md')]: { fontSize: '3rem' },
			[theme.breakpoints.up('xl')]: { fontSize: '4rem' },
		},
	},
	divider: {
		'&.MuiDivider-root': {
			width: '50vw',
			backgroundColor: 'brown',
			marginBottom: '10rem',

			[theme.breakpoints.down('xl')]: { marginBottom: '2rem' },
			[theme.breakpoints.down('md')]: { marginBottom: '1rem' },
		},
	},
	contentWrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		gap: '10rem',
		gridTemplateAreas: '"a b"\r\n"c d"',
		[theme.breakpoints.down('xxl')]: {
			width: '90vw',
			gap: 1,
			margin: 0,
			padding: 0,
		},
		[theme.breakpoints.down('xl')]: {
			display: 'grid',
			gridTemplateColumns: '100%',
			gridTemplateAreas:
				'"a"\r\n            "c"\r\n            "d"\r\n            "b"',
			placeItems: 'center',
		},
	},
	box: {
		width: '500px',
		height: '500px',
		margin: '2rem',
		borderRadius: '20px',
		cursor: 'pointer',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'end',
		'&:hover': {
			transform: 'scale(1.02)',
			boxShadow: `0px 3px 1px -2px rgb(0 0 0 / 20%),
			 0px 2px 2px 0px rgb(0 0 0 / 14%), 
			 0px 1px 5px 0px rgb(0 0 0 / 12%)`,
		},

		[theme.breakpoints.down('xl')]: {
			margin: 0,
		},
		[theme.breakpoints.down('sm')]: {
			width: '100vw',
		},
	},

	textArea: {
		'&.MuiTypography-root': {
			display: 'flex',
			alignItems: 'center',
			width: '500px',
			height: '500px',
			margin: '2rem',
			letterSpacing: '0.2rem',
			lineHeight: '2',
			justifyContent: 'flex-end',
			'&.nth-child(even)': {
				justifyContent: 'flex-end',
			},
			[theme.breakpoints.down('xl')]: {
				margin: 0,
			},
			[theme.breakpoints.down('md')]: {
				width: '450px',
				height: '450px',
			},
			[theme.breakpoints.down('sm')]: {
				width: '90vw',
			},
		},
	},
	gridThird: {
		gridArea: 'a',
	},
	gridFourth: {
		gridArea: 'd',
	},

	boxName: {
		'&.MuiTypography-root': {
			color: 'white',
			display: 'flex',
			paddingLeft: '1rem',
			fontSize: '1.5rem',
		},
	},
	dialog: {
		overflowX: 'hidden',
	},
	dialogContent: {
		'&.MuiDialogContent-root': {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'flex-end',
			margin: 0,
			paddingBottom: '32px',
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100%',
			width: '100%',
			height: '700px',

			[theme.breakpoints.down('xl')]: {
				height: '600px',
			},
			[theme.breakpoints.down('lg')]: {
				height: '500px',
			},
			[theme.breakpoints.down('md')]: {
				height: '400px',
				padding: 0,
			},
			[theme.breakpoints.down('sm')]: {
				width: '100vw',
				height: '40vh',
			},
		},
	},
	text: {
		letterSpacing: '0.1rem',

		fontWeight: '200',
		fontSize: '22px',
		color: 'black',
		width: '94%',
		alignSelf: 'center',
		padding: '2rem',
		[theme.breakpoints.down('md')]: {
			color: 'black',
			fontSize: '20px',
		},
	},
});
export default styles;
