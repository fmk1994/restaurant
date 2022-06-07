const styles = (theme) => ({
	commentsWrapper: {
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		margin: '75px 70px 10rem 0',
		paddingTop: '75px',
		[theme.breakpoints.down('md')]: {
			margin: 0,
		},
	},
	divider: {
		'&.MuiDivider-root': {
			width: '50vw',
			backgroundColor: 'brown',
			marginBottom: '5rem',
			[theme.breakpoints.down('sm')]: {
				margin: '2rem',
			},
		},
	},
	title: {
		'&.MuiTypography-root': {
			letterSpacing: '0.5rem',
			[theme.breakpoints.down('xxl')]: {
				fontSize: '4rem',
			},
			[theme.breakpoints.down('xl')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.down('md')]: {
				fontSize: '2rem',
			},
		},
	},
	comments: {
		overflowY: 'hidden',
		display: 'flex',
		flexDirection: 'row',
		width: '80vw',
		overflowX: 'scroll',
		padding: '20px',
		[theme.breakpoints.down('xl')]: {},
		[theme.breakpoints.down('md')]: {
			height: '70vh',
			width: '100%',
			alignItems: 'center',
			flexDirection: 'column',
			overflowY: 'scroll',
			overflowX: 'hidden',
			margin: 0,
		},
		'&::-webkit-scrollbar': {
			display: 'inline',
			height: '10px',
			scrollbarHeight: '30vw',
			borderRadius: '20px',
			backgroundColor: 'white',
			border: '0.1px solid rgb(228, 237, 234)',
		},
		'&::-webkit-scrollbar-thumb': {
			border: '1px solid black',
			borderRadius: '20px',
			scrollbarWidth: '10px',
			width: '10px',
			height: '10px',
		},
	},
	commentFormWrapper: {
		width: '30vw',
		[theme.breakpoints.down('xl')]: {
			width: '90vw',
		},
	},
	commentFormTitle: {
		marginTop: '3rem',
		fontStyle: 'italic',
		textAlign: 'center',
	},
});

export default styles;
