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
import {TotalPriceContextProvider} from '../contexts/TotalPriceContext';
import { MenuProvider } from '../contexts/MenuContext';

export default function App() {
	return (
		<ThemeProvider theme={theme}>

			<MenuProvider>
				<main
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						margin: 0,
						padding: 0,
					}}
				>
			<TotalPriceContextProvider>
						{/* <Navbar />
						<Start />
						<Menu />
						<AboutUs />
						<Gallery /> */}

						<Comments currentUserId='60d0fe4f5311236168a109d0'/>
						{/*<Contact />
						<Footer /> */}
						</TotalPriceContextProvider>
				</main>
			</MenuProvider>

		</ThemeProvider>
	);
}
