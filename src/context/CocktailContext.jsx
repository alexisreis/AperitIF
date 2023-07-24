import React, {createContext, useState, useEffect, useContext} from "react";
import {ListAlcoholRequest, ListCocktailRequest} from "../utils/dbpediaRequests.js";

const CocktailContext = createContext({
    cocktails: [],
    setCocktails: () => {},
    alcools: [],
    setAlcools: () => {},
});

const CocktailProvider = (props) => {

    const [cocktails, setCocktails] = useState([]);
    const [alcools, setAlcools] = useState([]);

    const fetchCocktails = async () => {
        const url = "https://dbpedia.org/sparql?query="
            + encodeURIComponent(ListCocktailRequest) + "&format=json";

        await fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then((data) => {
                if(data.results.bindings.length){
                    let jsonCocktails = [];
                    data.results.bindings.forEach(cocktail => {
                        jsonCocktails.push({name: cocktail.name.value, img:cocktail.thumbnail.value});
                    });
                    setCocktails(jsonCocktails);
                }
            });
    }

    const fetchAlcohols = async () => {
        const url = "https://dbpedia.org/sparql?query="
            + encodeURIComponent(ListAlcoholRequest) + "&format=json";

        fetch(url, {method: 'GET'})
            .then(response => response.json())
            .then((data) => {
                if(data.results.bindings.length){
                    let jsonAlcools = [];
                    data.results.bindings.forEach(cocktail => {
                        jsonAlcools.push({name: cocktail.name.value,img: cocktail.thumbnail.value});
                    });
                    setAlcools(jsonAlcools);
                }
            });
    }

    useEffect(() => {
        fetchCocktails().then(() => console.log("Cocktails fetched"));
        fetchAlcohols().then(() => console.log("Alcools fetched"));
    }, []);


    return (
        <CocktailContext.Provider value={{cocktails, setCocktails, alcools, setAlcools}}>
            {props.children}
        </CocktailContext.Provider>
    )
}

const useCocktails = () => useContext(CocktailContext);

export {CocktailProvider, useCocktails};
