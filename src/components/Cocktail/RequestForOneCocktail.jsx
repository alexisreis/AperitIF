import React, {useState, useEffect} from "react";
import CocktailCarousel from "../CocktailCarousel.jsx";
import './RequestForOneCocktail.css'

function RequestForOneCocktail(nameCocktail) {

    const [cocktailsIngredients, setCocktailsIngredients] = useState([]);

    console.log("PARAMMMEETTERR");
    console.log(nameCocktail.nameCocktail);
    var cocktail = nameCocktail.nameCocktail;
    var recherche = `PREFIX yago: <http://dbpedia.org/class/yago/>
                     SELECT ?cocktail ?name ?thumbnail ?comments ?served ?ingredients ?prep ?nameSP ?nameSPSP ?thumbnailSP STRAFTER(?nameSP, "Cocktails with") AS ?nameIngredients WHERE {
                     ?cocktail a yago:Cocktail107911677;
                     dbp:name ?name;
                     dbp:ingredients ?ingredients.
                     OPTIONAL{
                     ?cocktail
                     rdfs:comment ?comments.

                     Filter (langMatches(lang(?comments), "fr"))
                     }
                     OPTIONAL{
                     ?cocktail
                     dbp:prep ?prep.
                     }

                     OPTIONAL{
                     ?cocktail
                     dbp:served ?served.
                     }

                     OPTIONAL{
                     ?cocktail
                     dbo:thumbnail ?thumbnail.
                     }

                     OPTIONAL{
                     ?cocktail
                     dbo:wikiPageWikiLink ?liens.
                     ?liens rdfs:label ?nameSP.
                     FILTER regex(?nameSP, "Cocktails with", "i")
                     Filter (langMatches(lang(?nameSP), "en"))
                     }

                     OPTIONAL{
                     ?cocktail
                     dbo:wikiPageWikiLink ?liens.
                     ?liensSP
                     dbo:wikiPageWikiLink  ?liens.
                     ?liensSP dbp:name ?nameSPSP;
                     dbo:thumbnail ?thumbnailSP.
                     Filter(?nameSPSP != ?name)
                     }
                     Filter regex(?name, "`+cocktail+`")
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
        var mapIngredients = new Map();
        var arrayIngredients = new Array();

        data.results.bindings.forEach(r => {
            if(!mapIngredients.has(r.nameIngredients.value)){
                mapIngredients.set(r.nameIngredients.value,new Array());
                var temp = new Map();
                temp.set("ingredient", r.nameIngredients.value);
                arrayIngredients.push(temp);
            }
            arrayIngredients.forEach(t => {
                if(t.get("ingredient")===r.nameIngredients.value){
                    if(!t.has("cocktails")){
                        t.set("cocktails", new Array());

                    }
                    var temp = new Map();
                    temp.set("name",r.nameSPSP.value);
                    temp.set("thumbnail",r.thumbnailSP.value);


                    if(t.get("cocktails").filter(u => u.get("name")==r.nameSPSP.value).length==0 && temp.get("name")!=nameCocktail.nameCocktail){
                        t.get("cocktails").push(temp);
                    }
                }
            })
            mapIngredients.get(r.nameIngredients.value).push(r.nameSPSP.value);
        })
        setCocktailsIngredients(arrayIngredients);
        console.log("CCCCCCC");
        console.log(arrayIngredients);



    }

    useEffect(() => {
   		rechercher();
   	}, [])
    return (<>
        {/*<table id="resultatsOneCocktailTable"></table>*/}
        <div id="resultatOneCocktail"></div>

            {cocktailsIngredients.map((ingredient, index) =>
                <>
                <h3> Cocktails contenant aussi l'ingrédient : {ingredient.get("ingredient")} </h3>
				<CocktailCarousel key={index} cocktails={ingredient.get("cocktails")}  />
				</>
			)}
{/*         <CocktailCarousel listeCocktails={liste}/> */}
    </>)
}

export default RequestForOneCocktail;