const styles = {
	wrapper: {
		width: '600px',
		height: '600px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
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
