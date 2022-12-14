import {useEffect} from "react";
import React from "react";
import './RequestForOneCocktail.css'

function RequestForOneCocktail(nameCocktail) {
    console.log("PARAMMMEETTERR");
    console.log(nameCocktail.nameCocktail);
    var cocktail = nameCocktail.nameCocktail;
    var recherche = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
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
SELECT distinct ?name ?ingredients ?comments ?prep  ?served  ?thumbnail ?type WHERE {
?cocktail dbp:type ?type; 
dbp:name ?name; 
dbp:ingredients ?ingredients; 
rdfs:comment ?comments; 
dbp:prep ?prep;
dbp:served ?served;
dbo:thumbnail ?thumbnail.
Filter (langMatches(lang(?comments), "fr"))
Filter(?name = "`+cocktail+`"@en)
}`;
    const rechercher = () => {
        var contenu_requete = recherche;

        // Encodage de l'URL à transmettre à DBPedia
        var url_base = "http://dbpedia.org/sparql";
        var url = url_base + "?query=" + encodeURIComponent(contenu_requete) + "&format=json";

        // Requête HTTP et affichage des résultats
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var results = JSON.parse(this.responseText);
                console.log(results)
                afficherResultats(results);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }

    // Affichage des résultats dans un tableau
    const afficherResultats = (data) => {
        // Tableau pour mémoriser l'ordre des variables ; sans doute pas nécessaire
        // pour vos applications, c'est juste pour la démo sous forme de tableau
        var index = [];

        var Ctitle; // ok
        var Cimg; // ok
        var Cingredients; // ok
        var Ccomment; // ok
        var Cserved;
        console.log("DATA");
        console.log(data.results.bindings[0]);
        // title
        Ctitle = data.results.bindings[0].name.value;
        console.log("Title: ");
        console.log(data.results.bindings[0].name.value);

        // ingredients
        Cingredients = data.results.bindings[0].ingredients.value;
        console.log("Ingredients: ");
        console.log(data.results.bindings[0].ingredients.value);

        // comment
        Ccomment = data.results.bindings[0].comments.value;
        console.log("Comment: ");
        console.log(data.results.bindings[0].comments.value);

        // image
        Cimg = data.results.bindings[0].thumbnail.value;
        console.log("Image: ");
        console.log(data.results.bindings[0].thumbnail.value);

        // served
        Cserved = data.results.bindings[0].served.value;
        console.log("Served: ");
        console.log(data.results.bindings[0].served.value);


        var contenuCocktail = "<h1>";
        contenuCocktail += Ctitle;
        contenuCocktail += "</h1>";

        contenuCocktail += "<div class='align'>";
        contenuCocktail += "<div>"
        contenuCocktail += "<p id='comments'>";
        contenuCocktail += Ccomment;
        contenuCocktail += "</p>";
        contenuCocktail += "<div id='ingredients'>"
        contenuCocktail += Cingredients;
        contenuCocktail += "</div>";
        contenuCocktail += "</div>";
        contenuCocktail += "<div>";
        contenuCocktail += "<img id ='imgCocktail' src='";
        contenuCocktail += Cimg;
        contenuCocktail += "'/>'";
        contenuCocktail += "<div id='served'>";
        contenuCocktail += "Served on: ";
        contenuCocktail += Cserved;
        contenuCocktail += "</div>";
        contenuCocktail += "</div>";
        contenuCocktail += "</div>";
        contenuCocktail += "</div>";


        // <img src={this.props.img}/>


        var contenuTableau = "<tr>";

        data.head.vars.forEach((v, i) => {
            contenuTableau += "<th>" + v + "</th>";
            index.push(v);
        });

        data.results.bindings.forEach(r => {
            contenuTableau += "<tr>";

            index.forEach(v => {

                if (r[v]) {
                    if (r[v].type === "uri") {
                        contenuTableau += "<td><a href='" + r[v].value + "' target='_blank'>" + r[v].value + "</a></td>";
                    } else {
                        contenuTableau += "<td>" + r[v].value + "</td>";
                    }
                } else {
                    contenuTableau += "<td></td>";
                }

            });


            contenuTableau += "</tr>";
        });

        contenuTableau += "</tr>";

        // document.getElementById("resultatsOneCocktailTable").innerHTML = contenuTableau;
        document.getElementById("resultatOneCocktail").innerHTML = contenuCocktail;

    }

    rechercher();
    return (<>
        {/*<table id="resultatsOneCocktailTable"></table>*/}
        <div id="resultatOneCocktail"></div>
    </>)
}

export default RequestForOneCocktail;