import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import CocktailCard from "./CocktailCard.jsx";

import './CocktailCarousel.css'


const CocktailCarousel = ({cocktails}) =>  {

	return (<div className="carouselDiv">

		<Carousel centerMode
		          showStatus={false}
		          showIndicators={false}
		          showThumbs={false}
		          infiniteLoop={false}
		          centerSlidePercentage={20}>

            {cocktails.map((card, index) =>
                            <CocktailCard key={index} name={card.get("name")} img={card.get("thumbnail")} />
            )}
		</Carousel>
	</div>)
}

export default CocktailCarousel;