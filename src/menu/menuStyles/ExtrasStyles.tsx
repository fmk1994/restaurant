import { CSSProperties } from '@mui/styled-engine';
import { Styles } from '@mui/styles';
const styles: Styles<string, CSSProperties> = {
	Extras: {
		color: 'grey',
	},

	MenuItem: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginBottom: '1.5rem',
	},
	ExtrasHeading: {
		margin: '0 0 1.5rem',
		borderBottom: '1px solid grey',
	},
	ExtrasName: {
		flexGrow: '1',
	},
	notVisible: {
		display: 'none',
	},
};

export default styles;
