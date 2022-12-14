import {useEffect} from "react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CocktailCard from "./CocktailCard.jsx";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";
import {useState} from "react";
import './RequestExample.css'
function RequestExample() {
	var jsonCocktails = [];
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
					}
				} else {
// 					contenuTableau += "<td></td>";
				}

			});

			jsonCocktails.push({name: nameC, img:imgC});

				var card2=React.createElement(CocktailCard, {name:nameC, img:imgC});
				children.push(card2);
				console.log(children);



// 			contenuTableau += "</tr>";
		});
		console.log(jsonCocktails);
		var cardsTableau = React.createElement('div',{id:'cardsGrid'},children);
        ReactDOM.render(cardsTableau, document.getElementById('cardsTableau'));


	}
    rechercher();
	return (<div id="requestExample">
			{/* <textarea id="requete" rows="20" cols="80"></textarea>
			<button onClick={() => rechercher()}>Rechercher</button>

		<table id="resultats"></table> */}

		<h2>Les cocktails que nous vous proposons...</h2>

		<div id="cardsTableau">
        {children}
        </div>
	</div>)
}

export default RequestExample;