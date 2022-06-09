const styles = {
	wrapper: {
		width: '500px',
		height: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop:"75px"
	},

	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: '0.4rem',
		width: '50%',
	},
	button: {
		'&.MuiButton-root': {
			color: 'black',
			border: '1px solid black',
			marginBottom: '15px',
		},
	},
};

export default styles;
