import React, {useState, useEffect} from "react";
import CocktailCard from "./CocktailCard.jsx";
import './RequestExample.css'

function RequestExample() {

	const [cards, setCards] = useState([]);

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
		var url = "http://dbpedia.org/sparql?query="
			+ encodeURIComponent(contenu_requete) + "&format=json";

		fetch(url, {method: 'GET'})
			.then(response => response.json())
			.then((data) => {
				 if(data.results.bindings.length){
					 setCards(data.results.bindings);
					 console.log(data.results.bindings);
				 }
			});
	}

	useEffect(() => {
		rechercher();
	}, [])


	return (<div id="requestExample">
		<h2>Les cocktails que nous vous proposons...</h2>
		<div id="cardsTableau">
			{cards.map((card, index) =>
				<CocktailCard key={index} name={card.name.value} img={card.thumbnail.value} />
			)}
        </div>
	</div>)
}

export default RequestExample;