import React from "react";

import Member from "../../components/Member/member.jsx";

import Alexis from "../../assets/team/alexis.png";
import Colin from "../../assets/team/colin.png";
import Corentin from "../../assets/team/corentin.png";
import Eva from "../../assets/team/eva.png";
import Mael from "../../assets/team/mael.png";
import Mohamed from "../../assets/team/mohamed.png";
import Simon from "../../assets/team/simon.png";


import "./AboutPage.scss";


const AboutPage = () => {
    return (<>
        <div id="about-section">
            <h1>About us</h1>
            <p>Aperit'IF 🍹 has been created by 7 students in their last to final year of
                engineering studies in Computer Science at
                <a className="linkTo" href={"https://www.insa-lyon.fr/"}> INSA Lyon</a>.
                This was a mini-project due for syllabus using open data from
                <a className="linkTo"
                   href={"https://www.wikidata.org/wiki/Wikidata:Main_Page"}> Wikidata</a>.
                Information used is made available under Creative Commons CC0 License
                and/or Creative Commons Attribution-ShareAlike License. </p>
        </div>

        <div id="team-section">
            <h1>Team members :</h1>

            <div className="row">
                <div className="column">
                    <Member name="Mael" picture={Mael} description="a OM supporter" country="France"
                            fuel="coffee" mail="mael.arrive@insa-lyon.fr"/>
                </div>
                <div className="column">
                    <Member name="Corentin" picture={Corentin} description="a coffee addict" country="France"
                            fuel="coffee" mail="mael.arrive@insa-lyon.fr"/>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <Member name="Mohamed" picture={Mohamed} description="a SPARQL expert" country="France"
                            fuel="coffee" mail="mohamed.hmidi@insa-lyon.fr"/>
                </div>
                <div className="column">
                    <Member name="Simon" picture={Simon} description="a Montserrat supporter" country="France"
                            fuel="coffee" mail="simon.poulet@insa-lyon.fr"/>
                </div>
                <div className="column">
                    <Member name="Alexis"picture={Alexis} description="AAAAAAAAAUGH" country="France"
                            fuel="coffee" mail="alexis.reis@insa-lyon.fr"/>
                </div>
            </div>

            <div className="row">
                <div className="column">
                    <Member name="Colin" picture={Colin} description="gentil" country="France"
                            fuel="coffee" mail="colin.thomas@insa-lyon.fr"/>
                </div>

                <div className="column">
                    <Member name="Eva" picture={Eva} description="just a crack" country="France"
                            fuel="coffee" mail="eva.ugnon-coussoz@insa-lyon.fr"/>
                </div>
            </div>
        </div>


    </>);
}

export default AboutPage;
