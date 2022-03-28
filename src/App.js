import React, {useRef} from 'react';
import Gallery from "./Gallery";
import Contact from "./Contact";
import Start from "./Start";
import Menu from './Menu';
import OrderOnline from './OrderOnline';
import AboutUs from "./AboutUs";
import NavbarTop from "./NavbarTop";
import styles from './styles/StartStyles';
import {withStyles} from '@mui/styles';
import useScrollSnap from 'react-use-scroll-snap';
import {Route, Routes} from 'react-router-dom';



function App(props) {
  const scrollRef = useRef(null);
  
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 100 });

return(

<section ref={scrollRef}>

  <NavbarTop/>
  <Start/>
   <AboutUs/> 
  <Menu/>
  <OrderOnline/>
  <Gallery/>
  <Contact/>
  </section> 

)
}
export default withStyles(styles) (App)


// // let element = useRoutes([
  
  
// // {
// //   path:"/",
// //   element: <Start/>,
// // },

// //     {
// //       path:"start",
// //       element: <Start/>,
// //     },
// // {
// //   path:"o-nas",
// //   element: <AboutUs/>,
// // },
// // {
// //   path:"menu",
// //   element: <Menu/>,
// // },
// // {
// //   path:"zamow-online",
// //   element: <OrderOnline/>,
// // },
// // {
// //   path:"galeria",
// //   element: <Gallery/>,
// // },
// // {
// //   path: "kontakt",
// //   element: <Contact/>,

// // },

 
// // ])

// // return <NavbarProvider>{element}</NavbarProvider>;

// // return(
// // <NavbarProvider>
// //  <Routes>
// //     <Route exact path="/" element={<Start/>}/>
// //       <Route exact path="/o-nas" element={<AboutUs/>}/>
// //       <Route exact path="/menu" element={<Menu/>}/>
// //       <Route exact path="/zamow-online" element={<OrderOnline/>}/>
// //       <Route exact path="/galeria" element={<Gallery/>}/>
// //       <Route exact path="/kontakt" element={<Contact/>}/>
    
// //     </Routes>
// //     </NavbarProvider>
// // )



// // return(
// //   <section ref={scrollRef}>
// //     <NavbarTop/>
// // <Routes>
// // <Route exact path="/" element={<Start/>} />
// //   <Route exact path="/o-nas" element={<AboutUs/>} />
// //   <Route exact path="/menu" element={<Menu/>} />
// //   <Route exact path="/zamow-online" element={<OrderOnline/>} />
// //   <Route exact path="/galeria" element={<Gallery/>} />
// //   <Route exact path="/kontakt" element={<Contact/>} />

// // </Routes>
// // </section>
// // )
// // }