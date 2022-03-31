import React, { useRef } from 'react';
import Gallery from './Gallery';
import Contact from './Contact';
import Start from './Start';
import Menu from './menu/Menu';
import OrderOnline from './OrderOnline';
import AboutUs from './AboutUs';
import NavbarTop from './NavbarTop';
import { Route, Routes } from 'react-router-dom';



export default function App() {

	return (
		
    <>
	{/* <Routes>
	
	<Route path="/" element={<NavbarTop />}>
		<Route exact path="/" element={<Start />}/>
		<Route exact path="o_nas" element={<AboutUs/>}/>
		<Route exact path="menu" element={<Menu />}/>
		<Route exact path="zamow_online" element={<OrderOnline />}/>
		<Route exact path="galeria" element={<Gallery />}/>
		<Route exact path="o_nas" element={<AboutUs/>}/>
		<Route exact path="kontakt" element={<Contact />}/>
		
		</Route>
		<Route path="*" element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>}/>
			
			</Routes> */}
			<NavbarTop />
			<Start />
			<AboutUs />
			<Menu />
			<OrderOnline />
			<Gallery />
			<Contact />
    
     </>
	);
 
}
