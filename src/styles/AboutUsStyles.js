const styles = (theme) => ({
	AboutUs: {
		overflow: 'scroll',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '70px 70px 0 0',
		width: '80vw',
		[theme.breakpoints.down('xxl')]: {
			width: '100vw',
			margin: 0,
			marginTop: '75px',
		},
	},
	ContentWrapper: {
		display: 'grid',
		gridTemplateColumns: '1fr 1fr',
		gridTemplateRows: '1fr 1fr',
		gap: '5rem',
		gridTemplateAreas: `\"a b\"\r\n\"c d\"`,
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
	Box: {
		width: '500px',
		height: '500px',
		marginTop: '4rem',
		marginLeft: '2rem',
		borderRadius: '10px',
		cursor: 'pointer',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		display: 'flex',
		alignItems: 'end',

		'&:not(:hover)': {
			filter: 'grayscale(100%)',
		},

		[theme.breakpoints.down('xl')]: {
			margin: 0,
		},
		[theme.breakpoints.down('sm')]: {
			width: '450px',
			height: '450px',
		},
	},
	textArea: {
		display: 'flex',
		alignItems: 'center',
		width: '70%',
		height: '100%',
		'&.MuiTypography-root': {
			letterSpacing: '0.2rem',
			lineHeight: '2',

			[theme.breakpoints.down('xl')]: {
				height: '50vh',
				width: '80vw',
				margin: 0,
			},
			[theme.breakpoints.down('md')]: {
				marginTop: '1rem',
				marginBottom: '2rem',
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
	Dialog: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},

	dialogPhoto: {
		width: '1400px',
		height: '1000px',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',

		[theme.breakpoints.down('xxl')]: {
			backgroundSize: '100%',
			width: '1100px',
			height: '800px',
		},
		[theme.breakpoints.down('xl')]: {
			width: '1000px',
			height: '900px',
		},
		[theme.breakpoints.down('lg')]: {
			width: '800px',
			height: '600px',
		},
		[theme.breakpoints.down('md')]: {
			width: '600px',
			height: '480px',
		},
		[theme.breakpoints.down('sm')]: {
			width: '480px',
			height: '320px',
		},
	},

	Text: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '18px',
		color: 'black',
	},
});
export default styles;
