import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {AlcoholRequest} from "../../utils/dbpediaRequests.js";
import CocktailCarousel from "../../components/Cocktail/CocktailCarousel.jsx";

import "../CocktailPage/CocktailPage.css";
import Loading from "../../components/Loading/Loading.jsx";

const AlcoholPage = () => {

    const {nameAlcool} = useParams();
    const [alcool, setAlcool] = useState({
        name: "",
        img: "",
        comments: "",
        cocktails: []
    })

    const [loading, setLoading] = useState(true);


    const rechercher = async () => {

        const recherche = AlcoholRequest(nameAlcool);
        const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(recherche) + "&format=json";

        try {
            const response = await fetch(url);
            const data = await response.json();
            parseAlcoholRequestData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
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
                    thumbnail: data.results.bindings[i].thumbnail2.value,
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
            {loading && <Loading/>}

            <div id="cocktail-details-div">
                <img id="cocktail-img" src={alcool.img} alt="imgCocktail"/>
                <div id="cocktail-infos">
                    <h1 id="cocktail-name">{alcool.name}</h1>
                    <p id="cocktail-comments">{alcool.comments}</p>
                </div>
            </div>

            {alcool.cocktails.length > 0 ?
                    <>
                        <h2>Cocktails made with {alcool.name}</h2>
                        <CocktailCarousel cocktails={alcool.cocktails}/>
                    </> : null
            }
        </>);
}

export default AlcoholPage;