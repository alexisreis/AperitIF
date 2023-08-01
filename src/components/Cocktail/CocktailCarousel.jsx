import React from 'react';

import CocktailCard from "./CocktailCard.jsx";

import './CocktailCarousel.css'


const CocktailCarousel = ({cocktails}) =>  {

	return (
		<div className="carouselDiv">
            {cocktails.map((card, index) =>
                            <CocktailCard key={index} name={card?.name || card.get("name")} img={card?.thumbnail || card.get("thumbnail")} />
            )}
		</div>)
}

export default CocktailCarousel;