import "./App.css";
import Navbar from "./components/Navbar/index.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index.jsx";
import NotFound from "./components/NotFound/index.jsx";
import Login from "./components/Login/index.jsx";
import Profile from "./components/Profile/index.jsx";
import Help from "./components/Help/index.jsx";
import Works from "./components/Works/index.jsx";
import Register from "./components/Register/index.jsx";

function App() {
  return (
    <Routes>
      <Route path="profile" element={<Profile />} />
      <Route path="works" element={<Works />} />
      <Route path="help" element={<Help />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
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
