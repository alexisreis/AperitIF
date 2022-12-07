import React from "react";
import Header from "../Header/header.jsx";
import {Link} from "react-router-dom";


function Footer() {
    return (
        <footer className="footer">
            <p className="footer-by">
                L'abus d'alcool est dangereux pour la santé. À consommer avec modération.
                <br/>
                Projet réalisé par {" "}
                <Link to="/about">
                    une équipe d'étudiants
                </Link>
            </p>
        </footer>
    );
}

export default Footer;