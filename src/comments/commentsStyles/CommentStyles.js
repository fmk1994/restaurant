const styles = {
	comments: {
		marginTop: '20px',
		padding: '10px',
	},
	commentImageContainer: {
		marginRight: '12px',
		'& img': {
			borderRadius: '50px',
		},
	},
	commentRightPart: {
		width: '100%',
	},
	commentContent: {
		display: 'fle',
	},
	commentAuthor: {
		marginRight: '8px',
		fontSize: '20px',
		color: 'rgb(59, 130, 246)',
	},
	commentText: {
		fontSize: '18px',
	},
	commentActions: {
		display: 'flex',
		fontSize: '12px',
		color: 'rgb(51, 51, 51)',
		cursor: 'pointer',
		marginTop: '8px',
	},
	commentAction: {
		marginRight: '8px',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	replies: {
		marginTop: '20px',
	},
};

export default styles;
