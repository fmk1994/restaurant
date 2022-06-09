import Start from './Start';
import AboutUs from './AboutUs';
import Footer from './Footer';
import Comments from './Comments';
import theme from '../styles/createTheme';
import { TotalPriceContextProvider } from '../contexts/TotalPriceContext';
import { withStyles } from '@mui/styles';
import styles from '../styles/AppStyles';
// import Words from '../menu/menuComponents/Words';
function App(props) {
    const { classes } = props;
    return theme = { theme } >
        className;
    {
        classes.main;
    }
     >
        { /* <Words/> */}
        < TotalPriceContextProvider >
        />
        < Start /  >
        />
        < AboutUs /  >
        />
        < Comments /  >
        />
        < Footer /  >
        /TotalPriceContextProvider>
        < /main> 
        < /MenuProvider>
        < /ThemeProvider>;
}
export default withStyles(styles)(App);
