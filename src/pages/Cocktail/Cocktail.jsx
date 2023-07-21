import React from "react";
import {useParams} from "react-router-dom";

import RequestForOneCocktail from "../../components/Cocktail/RequestForOneCocktail.jsx";

function Cocktail (){

    const{nameCocktail} = useParams();

    return(
        <>
            <div className="bodyPage">
                <RequestForOneCocktail nameCocktail={nameCocktail}/>
            </div>
        </>);
}

export default Cocktail;