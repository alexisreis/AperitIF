import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import CocktailPage from "./pages/CocktailPage/CocktailPage.jsx";
import AlcoholPage from "./pages/AlcoolPage/AlcoholPage.jsx";
import {CocktailProvider} from "./context/CocktailContext.jsx";


import './App.scss'


export default function App() {

	return (
		<CocktailProvider>
			<BrowserRouter basename={import.meta.env.DEV ? '/' : '/AperitIF/'}>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<HomePage/>}/>
						<Route path="/about" element={<AboutPage/>}/>
						<Route path="/cocktail/:nameCocktail" element={<CocktailPage/>}/>
						<Route path="/alcool/:nameAlcool" element={<AlcoholPage/>}/>
						<Route path="*" element={<NotFoundPage/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</CocktailProvider>
	);
}