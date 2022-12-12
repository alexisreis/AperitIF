import React from "react";
import  DescriptionCocktail from "../../components/Cocktail/DescriptionCocktail";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestForOneCocktail from "../../components/Cocktail/RequestForOneCocktail.jsx";
import {useParams} from "react-router-dom";

function Cocktail (){

    const{nameCocktail} = useParams();
    return(
        <body>
            <Header />
            <h2> Ceci est la page Cocktail.jsx</h2>
            <RequestForOneCocktail nameCocktail={nameCocktail}/>
            <DescriptionCocktail />
            <Footer />
        </body>);
}

export default Cocktail;