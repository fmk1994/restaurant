import {createTheme} from '@mui/material'
import {grey} from '@mui/material/colors';
const theme = createTheme({
    breakpoints:{
        keys:[
            0:"xs",
            1:"sm",
            2:"md",
            3:"lg",
            4:"xl",
            5:"xxl",
            6:"additional_bp"
        ],
        values:{
            xs: 0,
            sm: 576,
            md: 768,
            lg: 972,
            additional_bp: 1100,
            xl: 1200,
            xxl: 1440,
          
        },
    },

    palette:{
        primary:{
            main: grey[900],
        },
        secondary:{
            main: grey[700],
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
			backgroundColor: 'transparent',

			'&:hover': {
				transform: 'scale(1.15)',
				backgroundColor: 'transparent',
			},
                },
            },
        },
    }
});

export default theme;