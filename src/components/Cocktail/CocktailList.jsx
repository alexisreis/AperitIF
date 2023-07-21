import React, {useContext} from "react";

import CocktailCard from "./CocktailCard.jsx";
import {CocktailContext} from "../../context/CocktailContext.js";

import './CocktailList.css'


function CocktailList() {

	const {cocktails} = useContext(CocktailContext);

	return (
		<div id="cardsTableau">
			{cocktails
				.map((card, index) =>
				<CocktailCard key={index} name={card.name} img={card.img} />
			)}
        </div>)
}

export default CocktailList;