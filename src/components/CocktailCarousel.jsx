import {useEffect} from "react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CocktailCard from "./CocktailCard.jsx";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";
import {useState} from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './CocktailCarousel.css'
function RequestExample() {

    const [cocktail, setCocktail] = useState();

    var requete = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
		                  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
		                  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		                  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		                  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
		                  PREFIX dc: <http://purl.org/dc/elements/1.1/>
		                  PREFIX : <http://dbpedia.org/resource/>
		                  PREFIX dbpedia2: <http://dbpedia.org/property/>
		                  PREFIX dbpedia: <http://dbpedia.org/>
		                  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
		                  \n
                          SELECT distinct ?thumbnail ?name WHERE {
                          ?cocktail dbp:type ?type;
                          dbp:name ?name;
                          dbp:ingredients ?ingredients;
                          rdfs:comment ?comments;
                          dbp:prep ?prep;
                          dbp:served ?served;
                          dbo:thumbnail ?thumbnail.
                          Filter (langMatches(lang(?comments), "fr"))

                          }`;

	const rechercher = () => {
		var contenu_requete = requete;
		// Encodage de l'URL à transmettre à DBPedia
		var url_base = "http://dbpedia.org/sparql";
		var url = url_base + "?query=" + encodeURIComponent(contenu_requete) + "&format=json";
		var url_base = "http://dbpedia.org/sparql";
        var url2 = url_base + "?query=" + encodeURIComponent(contenu_requete) + "&format=json";
		// Requête HTTP et affichage des résultats
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				var results = JSON.parse(this.responseText);
				//var names = "TEST";
				//var names = JSON.parse(this.responseText);
				console.log(results)
				afficherResultats(results);
			}
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();
	}

    var children=[];
    var extendedChildren=[];

	// Affichage des résultats dans un tableau
	const afficherResultats = (data) => {

	    children=[];
		// Tableau pour mémoriser l'ordre des variables ; sans doute pas nécessaire
		// pour vos applications, c'est juste pour la démo sous forme de tableau
		 var index = [];

// 		var contenuTableau = "<tr>";

		data.head.vars.forEach((v, i) => {
// 			contenuTableau += "<th>" + v + "</th>";
			index.push(v);
		});

        var imgC;
        var nameC;
		data.results.bindings.forEach(r => {

// 			contenuTableau += "<tr>";
			index.forEach(v => {
				if (r[v]) {
					if (r[v].type === "uri") {
// 						contenuTableau += "<td><img src=\""+ r[v].value +"\" style=\"max-width:100px;\"/></td>";
					    imgC = r[v].value;
					} else {
// 						contenuTableau += "<td>" + r[v].value + "</td>";
						nameC = r[v].value;
						console.log(r[v].value);
						console.log(typeof nameC);
					}
				} else {
// 					contenuTableau += "<td></td>";
				}

			});

				var card2=React.createElement(CocktailCard, {name:nameC, img:imgC});
				children.push(card2);
				console.log(children);





// 			contenuTableau += "</tr>";
		});
		var cardsTableau = React.createElement('div',{id:'cardsGrid'},children);

		extendedChildren = React.children.map(children, (child) => {
            return React.cloneElement(
              child
            );
          });
// 		children.forEach(element => ReactDOM.render(element, document.getElementById('cardsTableau')));
        //ReactDOM.render(cardsTableau, document.getElementById('cardsTableau'));

// 		contenuTableau += "</tr>";

		//document.getElementById("resultats").innerHTML = contenuTableau;
        //document.getElementById("resultats").appendChild(cardsTableau);
        //document.getElementById("resultats").innerHTML= "<CocktailCard name=\"JoLeCocktail\" imgUrl=\"https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/recettes-de-cuisine/grand-canyon-2068602/21717382-2-fre-FR/Cocktail-grand-canyon\"/>";

	}
    rechercher();
	return (<div id="requestExample">
			{/* <textarea id="requete" rows="20" cols="80"></textarea>
			<button onClick={() => rechercher()}>Rechercher</button>

		<table id="resultats"></table> */}


		<Carousel centerMode showThumbs={false} infiniteLoop={true} centerSlidePercentage={30}>

                        {children}

                        <CocktailCard img="https://www.shorturl.at/img/shorturl-icon.png" name="qsjsdl"/>
                        <CocktailCard img="https://www.shorturl.at/img/shorturl-icon.png" name="qsjsdl"/>
                        <CocktailCard img="https://www.shorturl.at/img/shorturl-icon.png" name="qsjsdl"/>
                        <CocktailCard img="https://www.shorturl.at/img/shorturl-icon.png" name="qsjsdl"/>
        </Carousel>



	</div>)
}

export default RequestExample;