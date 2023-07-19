import React, {useMemo, useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Home from "./pages/Home/home.jsx";
import NotFound from "./pages/NotFound/notfound.jsx";
import About from "./pages/About/about.jsx";
import Cocktail from "./pages/Cocktail/Cocktail.jsx";
import Alcool from "./pages/Alcool/Alcool.jsx";
import {CocktailContext} from "./context/CocktailContext.js";

import './App.css'


export default function App() {

	var requete = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
		                  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
		                  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		                  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		                  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
		                  PREFIX dc: <http://purl.org/dc/elements/1.1/>
		                  PREFIX : <https://dbpedia.org/resource/>
		                  PREFIX dbpedia2: <https://dbpedia.org/property/>
		                  PREFIX dbpedia: <https://dbpedia.org/>
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
                          Filter(?type = "cocktail"@en)
                          Filter (langMatches(lang(?comments), "en"))
                          } ORDER BY ASC ($name)`;

	var requeteAlcool=`PREFIX owl: <http://www.w3.org/2002/07/owl#>
		                  PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
		                  PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
		                  PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
		                  PREFIX foaf: <http://xmlns.com/foaf/0.1/>
		                  PREFIX dc: <http://purl.org/dc/elements/1.1/>
		                  PREFIX : <https://dbpedia.org/resource/>
		                  PREFIX dbpedia2: <https://dbpedia.org/property/>
		                  PREFIX dbpedia: <https://dbpedia.org/>
		                  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
		                  \n
		                  SELECT distinct ?name ?thumbnail WHERE {
?cocktail dbp:type ?type; 
dbp:name ?name;
rdfs:comment ?comment;
dbo:thumbnail ?thumbnail.
Filter (langMatches(lang(?comment), "en"))


Filter(?type = dbr:Liquor || ?type = dbr:Brandy  || ?type= "Alcoholic beverage"@en || ?type ="Rum"@en || ?type=dbr:Liqueur || ?type = dbr:American_whiskey || ?type = dbr:Cream_liqueur || ?type=dbr:Bourbon_whiskey || ?type= dbr:Gin || ?type= "Gin"@en || ?type = dbr:Aperitif  || ?type = "champagne"@en || ?type = "vodka"@en || ?type = dbr:Gin || ?type="Vodka"@en || ?type = dbr:Tequila || ?type = dbr:Bitters || ?type = "Spirit"@en || ?type="Liquor"@en || ?type= dbr:Coffee_liqueur || ?type = "Triple sec liqueur"@en || ?type  = "pastis"@en || ?type = "Slushy"@en || ?type="beer"@en || ?type = "wine"@en || ?type="Syrup"@en)
} ORDER BY ASC($name)`;

	const [cocktails, setCocktails] = useState([]);
	const [alcools,setAlcools]=useState([]);

	const cocktailProvider = useMemo(() => ({
		cocktails,
		setCocktails,
		alcools,
		setAlcools
	}), [cocktails, setCocktails,alcools,setAlcools]);

	useEffect(() => {
		var contenu_requete = requete;
		var contenu_requete2 = requeteAlcool;
		// Encodage de l'URL à transmettre à DBPedia
		var url = "https://dbpedia.org/sparql?query="
			+ encodeURIComponent(contenu_requete) + "&format=json";
		var url2= "https://dbpedia.org/sparql?query="
			+ encodeURIComponent(contenu_requete2) + "&format=json";

		fetch(url, {method: 'GET'})
			.then(response => response.json())
			.then((data) => {
				if(data.results.bindings.length){
					data.results.bindings.forEach(cocktail => {
						jsonCocktails.push({name: cocktail.name.value, img:cocktail.thumbnail.value});
					});
					setCocktails(jsonCocktails);
				}
			});

		fetch(url2, {method: 'GET'})
			.then(response => response.json())
			.then((data) => {
				if(data.results.bindings.length){
					data.results.bindings.forEach(cocktail => {
						jsonAlcools.push({name: cocktail.name.value,img: cocktail.thumbnail.value});
					});
					setAlcools(jsonAlcools);
				}
			});
	}, []);

	const afficherResultats2 = (data) => {
		var jsonAlcools = [];
		data.forEach(cocktail => {
			jsonAlcools.push({name: cocktail.name.value,img: cocktail.thumbnail.value});
		});
		setAlcools(jsonAlcools);
		}

	return (
		<CocktailContext.Provider value={cocktailProvider}>
			<BrowserRouter basename={import.meta.env.DEV ? '/' : '/AperitIF/'}>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home/>}/>
						<Route path="about" element={<About/>}/>
						<Route path="/cocktail/:nameCocktail" element={<Cocktail/>}/>
						<Route path="/alcool/:nameAlcool" element={<Alcool/>}/>
						<Route path="*" element={<NotFound/>}/>
					</Route>
				</Routes>
			</BrowserRouter>
		</CocktailContext.Provider>
	);
}