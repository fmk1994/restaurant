const styles = {
	MenuItem: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '1.5rem',
	},
	Mains: {
		gridColumn: '1 / 2',
	},
	MainsName: {
		margin: '0',
		flexGrow: '1',
	},
	MainsHeading: {
		margin: '0 0 1.5rem',
		borderBottom: '1px solid grey',
	},

	MainsDescription: {
		flex: '1 1 100%',
		margin: '0.75rem 0 0',
		color: 'grey',
	},
	input: {
		display: 'grid',
		placeItems: 'center',
	},
};

export default styles;
