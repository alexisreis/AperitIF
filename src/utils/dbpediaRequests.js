const AlcoholRequest = (alcoholName) =>
	`PREFIX owl: <http://www.w3.org/2002/07/owl#>
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
                    SELECT distinct ?name ?comments ?thumbnail ?nameSP ?thumbnail2  WHERE {
                    ?cocktail dbp:type ?typeSP; 
                    dbo:thumbnail ?thumbnail;
                    rdfs:comment ?comments;
                    dbp:name ?name.
                    OPTIONAL
                    {
                    ?cocktail1 dbp:type "cocktail"@en;
                    rdfs:comment ?comm;
                    dbo:thumbnail ?thumbnail2;
                    dbp:name ?nameSP;
                    dbp:ingredients ?ingredients.
                    Filter(regex(?ingredients,"` + alcoholName.toLowerCase() + `","i"))
                    }
                    Filter (langMatches(lang(?comm), "en"))
                    Filter (langMatches(lang(?comments), "en"))
                    FILTER(?name="` + alcoholName + `"@en)
                    }`

const CocktailRequest = (cocktailName) =>
	`PREFIX yago: <https://dbpedia.org/class/yago/>
                     SELECT ?cocktail ?name ?thumbnail ?comments ?served ?ingredients ?prep ?nameSP ?nameSPSP ?thumbnailSP STRAFTER(?nameSP, "Cocktails with") AS ?nameIngredients WHERE {
                     ?cocktail dbp:type ?type;
                     dbp:name ?name;
                     dbp:ingredients ?ingredients.
                     OPTIONAL{
                     ?cocktail
                     rdfs:comment ?comments.

                     Filter (langMatches(lang(?comments), "en"))
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
                     Filter regex(?name, "`+cocktailName+`")
                     }`

export { AlcoholRequest, CocktailRequest }