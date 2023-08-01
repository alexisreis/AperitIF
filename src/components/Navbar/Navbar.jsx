import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import SearchBar from "../SearchBar/SearchBar.jsx";
import cocktail from "../../assets/cocktails.png";

import "./Navbar.scss";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const isHome = useLocation().pathname == "/";

  return (
      <div className="header">
        <div className="header__content">
          <div id="header_title">

            <img src={cocktail} id="logo" />

            <Link to="/" className="header__content__logo">
              <p className="title">APERIT'IF</p>
            </Link>

            <div id="navbar-search-bar">
              {!isHome && <SearchBar />}
            </div>

          </div>



          <nav className={`header__content__nav ${menuOpen ? "isMenu" : ""}`}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>

          <div className="header__content__toggle">
            {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
            ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
            )}
          </div>
        </div>
      </div>
  );
}

export default Navbar;
