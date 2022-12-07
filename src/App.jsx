import {useState, useEffect} from 'react'
import reactLogo from '../public/cocktails.png'
import './App.css'
import CountButton from "./components/CountButton.jsx";
import RequestExample from "./components/RequestExample.jsx";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {

  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
     </BrowserRouter>
  )
}

export default App
