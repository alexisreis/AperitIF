import React from "react";

import Member from "../../components/Member/member.jsx";

import "./AboutPage.scss";


const AboutPage = () => {
	return (<>
			<h1>About</h1>
			<h2>Project created by 7 students in their last to final year of
				engineering studies in Computer Science at
				<a className="linkTo" href={"https://www.insa-lyon.fr/"}> INSA Lyon</a>.
				This was a mini-project due for syllabus using open data from
				<a className="linkTo"
				   href={"https://www.wikidata.org/wiki/Wikidata:Main_Page"}> Wikidata</a>.
				Information used is made available under Creative Commons CC0 License
				and/or Creative Commons Attribution-ShareAlike License. </h2>

			<h2>Team members :</h2>

			<div className="row">
				<div className="column">
					<Member name="Mael" description="ReactJS expert" country="France"
					        fuel="coffee" mail="mael.arrive@insa-lyon.fr"/>
				</div>
				<div className="column">
					<Member name="Corentin" description="ReactJS expert" country="France"
					        fuel="coffee" mail="mael.arrive@insa-lyon.fr"/>
				</div>
			</div>

			<div className="row">
				<div className="column">
					<Member name="Mohamed" description="ReactJS expert" country="France"
					        fuel="coffee" mail="mohamed.hmidi@insa-lyon.fr"/>
				</div>
				<div className="column">
					<Member name="Simon" description="ReactJS expert" country="France"
					        fuel="coffee" mail="simon.poulet@insa-lyon.fr"/>
				</div>
				<div className="column">
					<Member name="Alexis" description="ReactJS expert" country="France"
					        fuel="coffee" mail="alexis.reis@insa-lyon.fr"/>
				</div>
			</div>

			<div className="row">
				<div className="column">
					<Member name="Colin" description="ReactJS expert" country="France"
					        fuel="coffee" mail="colin.thomas@insa-lyon.fr"/>
				</div>

				<div className="column">
					<Member name="Eva" description="ReactJS expert" country="France"
					        fuel="coffee" mail="eva.ugnon-coussoz@insa-lyon.fr"/>
				</div>
			</div>
		</>);
}

export default AboutPage;
