

const styles =(theme) => ({
	Total: {
		gridColumn: '1 / 3',
		marginTop: '0.5rem',
		padding: '0.75rem 0 1.25rem',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		position: 'sticky',
		bottom: '50px',
		color: 'black',
		backgroundColor: 'white',
		borderTop: '1px solid black',
		boxshadow: '0 0.5rem 0.75rem 0.5rem white',
		[theme.breakpoints.up('sm')]: {
			margintop: '0',
		},
	},
	TotalTitle: {
		margin: '0',
		fontSize: '1.5rem',
	},
	TotalPrice: {
		fontSize: '1.5rem',
	},
});

export default styles;
