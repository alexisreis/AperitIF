import React from "react";
import  DescriptionCocktail from "../../components/Cocktail/DescriptionCocktail";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestForOneCocktail from "../../components/Cocktail/RequestForOneCocktail.jsx";

function Cocktail (){
    return(
        <body>
            <Header />
            <h2> Ceci est la page Cocktail.jsx</h2>
            <RequestForOneCocktail />
            <DescriptionCocktail />
            <Footer />
        </body>);
}

export default Cocktail;