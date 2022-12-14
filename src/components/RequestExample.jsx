import React, {useState, useEffect, useContext} from "react";
import CocktailCard from "./CocktailCard.jsx";
import './RequestExample.css'
import {CocktailContext} from "../context/CocktailContext.js";

function RequestExample() {

	const {cocktails} = useContext(CocktailContext);

	return (<div id="requestExample">
		<h2>Les cocktails que nous vous proposons...</h2>
		<div id="cardsTableau">
			{cocktails.map((card, index) =>
				<CocktailCard key={index} name={card.name} img={card.img} />
			)}
        </div>
	</div>)
}

export default RequestExample;