import React from "react";
import {useNavigate} from "react-router-dom";

import DefaultCocktail from "../../assets/default_cocktail.jpg";

const CocktailSuggestion = ({cocktail}) => {

	const navigate = useNavigate();

	const navigateToCocktailPage = () => {
		navigate("/cocktail/" + cocktail.name);
	}

	return (<li className="cocktail-suggestion"
	            onClick={navigateToCocktailPage}>
		<img id="image"
		     src={cocktail.img}
		     alt={cocktail.name}
		     onError={(e) => {
			     e.target.src = DefaultCocktail
		     }}/>

		<span style={{marginLeft: "10px"}}>{cocktail.name}</span>
	</li>)
}

export default CocktailSuggestion;