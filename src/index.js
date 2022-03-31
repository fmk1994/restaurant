import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AboutUs from "./AboutUs";
import NavbarTop from "./NavbarTop";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Start from "./Start";
import OrderOnline from "./OrderOnline";





ReactDOM.render(
	<React.StrictMode>
<BrowserRouter>
<App/>
			</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





