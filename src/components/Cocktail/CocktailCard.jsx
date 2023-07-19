import React from 'react';
import defaultCocktail from "../../assets/default_cocktail.jpg";
import './CocktailCard.css'
import {useNavigate} from "react-router-dom";

function CocktailCard({name, img}) {
	const navigate = useNavigate();
	const navigateToCocktail = () => {
		navigate("/cocktail/" + name);
	}

	return (
		<div id="divCard">
			<a onClick={navigateToCocktail}>
				<img src={img ? img : defaultCocktail}
				     onError={(e) =>
					     (e.target.onerror = null)(
						     (e.target.src =
							     defaultCocktail)
					     )}/>
				<div><p>{name}</p></div>
			</a>
		</div>
	)

}


export default CocktailCard;