import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface BreakpointOverrides {
		xs: true;
		sm: true;
		md: true;
		lg: true;
		additional_bp: true;
		xl: true;
		xxl: true;
	}
}
const theme: Theme = createTheme({
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'additional_bp', 'xl', 'xxl'],
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 972,
			additional_bp: 1100,
			xl: 1200,
			xxl: 1440,
		},
	},

	palette: {
		primary: {
			main: grey[900],
		},
		secondary: {
			main: grey[700],
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					backgroundColor: 'white',
					opacity: '0.9',
					'&:hover': {
						transform: 'scale(1.15)',
						backgroundColor: 'white',
						opacity: '1',
					},
				},
			},
		},
	},
	typography: {
		fontFamily: `"Raleway","Roboto", sans-serif`,

		h1: {
			fontSize: '4rem',
		},
	},
});

export default theme;
