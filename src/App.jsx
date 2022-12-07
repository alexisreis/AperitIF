import "./App.css";
import Header from "./components/Header/header.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import NotFound from "./components/NotFound/notfound.jsx";
import About from "./components/About/about.jsx";

function App() {
  return (
    <Routes>
      <Route path="about" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
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
