const styles = (theme) => ({
	commentsWrapper: {
		width: '100vw',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
		marginTop: '10rem',
		marginBottom: '10rem',
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
