import { CSSProperties } from "@mui/styled-engine";
import { Styles } from "@mui/styles";
const styles:Styles<string,CSSProperties> = {
	form: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		letterSpacing:"0"
	},

	textField: {
		width: '100%',

	},

	formButton: {
		'&.MuiButton-root': {
			border: '1px solid black',
			color: 'black',
			width: '4rem',
			height: '2rem',
			fontSize: '0.8rem',
			margin: '0.5rem 0.5rem',
		
		},
	},
	nameInput: {
		width: '10rem',
		
	
	},
};

export default styles;
