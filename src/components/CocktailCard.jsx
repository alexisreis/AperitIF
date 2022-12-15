import React from 'react';
import { Route, Link, Router } from 'react-router-dom';
import defaultCocktail from "../img/cocktail.jpg";
import './CocktailCard.css'

function CocktailCard({name, img}) {

	return (
		<div id="divCard" onClick={() => window.location.assign("/#/cocktail/")}>
{/* 			<Link to={"/cocktail/" + name}> */}
				<img
				src={img ? img : defaultCocktail}
				     onError={(e) =>
					     (e.target.error = null)(
						     (e.target.src =
							     defaultCocktail)
					     )}/>
				<div><p>{name}</p></div>
{/* 			</Link> */}
		</div>
	)

}


export default CocktailCard;