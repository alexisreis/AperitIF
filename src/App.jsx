import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/notfound.jsx";
import About from "./pages/About/AboutPage.jsx";
import Cocktail from "./pages/Cocktail/Cocktail.jsx";
import Alcool from "./pages/Alcool/Alcool.jsx";
import {CocktailProvider} from "./context/CocktailContext.jsx";


import './App.css'


export default function App() {

	return (
		<CocktailProvider>
			<BrowserRouter basename={import.meta.env.DEV ? '/' : '/AperitIF/'}>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/cocktail/:nameCocktail" element={<Cocktail/>}/>
						<Route path="/alcool/:nameAlcool" element={<Alcool/>}/>
						<Route path="*" element={<NotFound/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</CocktailProvider>
	);
}