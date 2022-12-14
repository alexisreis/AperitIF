import "./App.css";
import React from "react";
import Cocktail from "./pages/Cocktail/Cocktail.jsx";
import "./App.css";
import Header from "./components/Header/header.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.jsx";
import NotFound from "./pages/NotFound/notfound.jsx";
import About from "./pages/About/about.jsx";

function App() {

  return (
    <Routes>
        <Route path="about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/cocktail/:nameCocktail" element={<Cocktail />} />
    </Routes>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
