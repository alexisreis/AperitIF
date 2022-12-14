import React from "react";
import  DescriptionCocktail from "../../components/Cocktail/DescriptionCocktail";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestForOneCocktail from "../../components/Cocktail/RequestForOneCocktail.jsx";
import {useParams} from "react-router-dom";

function Cocktail (){

    const{nameCocktail} = useParams();
    return(
        <>
            <Header />
            <RequestForOneCocktail nameCocktail={nameCocktail}/>
            <DescriptionCocktail />
            <Footer />
        </>);
}

export default Cocktail;