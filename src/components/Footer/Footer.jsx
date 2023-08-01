import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import {Link} from "react-router-dom";
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    Alcohol abuse is bad for your health, please consume in moderation.
                    <br/>
                    Project realised by {" "}
                    <Link to="/about">
                        a students' team
                    </Link>
                </p>
            </div>
        </footer>
    );
}

export default Footer;