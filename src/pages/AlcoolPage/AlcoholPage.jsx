import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import CocktailSuggestion from "../../components/Cocktail/CocktailSuggestion.jsx";
import {AlcoholRequest} from "../../utils/dbpediaRequests.js";

const AlcoholPage = () => {

    const {nameAlcool} = useParams();
    const [alcool, setAlcool] = useState({
        name: "",
        img: "",
        comments: "",
        cocktails: []
    })


    const rechercher = async () => {

        const recherche = AlcoholRequest(nameAlcool);
        const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(recherche) + "&format=json";

        try {
            const response = await fetch(url);
            const data = await response.json();
            parseAlcoholRequestData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const parseAlcoholRequestData = (data) => {

        let name = data.results.bindings[0].name.value;
        let img = data.results.bindings[0].thumbnail.value;
        let comments = data.results.bindings[0].comments.value;
        let cocktails = [];

        for (let i = 0; i < data.results.bindings.length; i++) {
            if (data.results.bindings[i].thumbnail2 != undefined && data.results.bindings[i].nameSP != undefined) {
                cocktails.push({
                    name: data.results.bindings[i].nameSP.value,
                    img: data.results.bindings[i].thumbnail2.value,
                })
            }
        }

        setAlcool({
            name: name,
            img: img,
            comments: comments,
            cocktails: cocktails
        })
    }

    useEffect(() => {
        rechercher();
    }, [nameAlcool]);

    return (
        <>
            <div id="resultatOneAlcool">
                <h1>{alcool.name}</h1>
                <div className="align">
                    <div>
                        <p id="comments">{alcool.comments}</p>
                    </div>
                    <div>
                        <img id="imgCocktail" src={alcool.img} alt="imgCocktail"/>
                    </div>
                </div>

                <h2>Cocktails made with {alcool.name} :</h2>
                <div id="suggestion">
                    <ul className="no-bullets">
                        {alcool.cocktails.length > 0 ? alcool.cocktails.map((cocktail) => (
                            <CocktailSuggestion key={cocktail.name} cocktail={cocktail}/>
                        )) : <p>No cocktails found with with alcohol</p>}
                    </ul>
                </div>
            </div>
        </>);
}

export default AlcoholPage;