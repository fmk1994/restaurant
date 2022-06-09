import React from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import Start from './Start';
import Menu from './Menu';
import AboutUs from './AboutUs';
import Navbar from './Navbar';
import Footer from './Footer';
import Comments from './Comments';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../styles/createTheme';
import { TotalPriceContextProvider } from '../contexts/TotalPriceContext';
import { MenuProvider } from '../contexts/MenuContext';
import { withStyles } from '@mui/styles';
import styles from '../styles/AppStyles';
// import Words from '../menu/menuComponents/Words';
function App(props) {
	const {classes} = props;
	return (

		<ThemeProvider theme={theme}>
			<MenuProvider>
				
<main className={classes.main}>
{/* <Words/> */}
<TotalPriceContextProvider>
					<Navbar />
						<Start />
						<Menu />
						<AboutUs />
						<Gallery />
						<Comments />
						<Contact />
						<Footer />
					</TotalPriceContextProvider>
				</main> 
			</MenuProvider>
		</ThemeProvider>
	)
}
export default withStyles(styles)(App)