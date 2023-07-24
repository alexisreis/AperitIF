import React, {useContext} from "react";

import CocktailCard from "./CocktailCard.jsx";
import {useCocktails} from "../../context/CocktailContext.jsx";

import './CocktailList.css'


function CocktailList() {

	const {cocktails} = useCocktails();

	return (
		<div id="cardsTableau">
			{cocktails
				.map((card, index) =>
				<CocktailCard key={index} name={card.name} img={card.img} />
			)}
        </div>)
}

export default CocktailList;