import {useEffect} from "react";
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CocktailCard from "./CocktailCard.jsx";
import { createRoot } from 'react-dom/client';
import { createElement } from "react";
import {useState} from "react";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './CocktailCarousel.css'
function CocktailCarousel(listeCocktails) {
    const [cards, setCards] = useState([]);

    useEffect(() => {
            console.log("AAAAAAA");
            console.log(listeCocktails.cocktails)
    		setCards(listeCocktails.cocktails);
    	}, [])

	return (<div>

		<Carousel centerMode showThumbs={false} infiniteLoop={false} centerSlidePercentage={20}>

            {cards.map((card, index) =>
                            <CocktailCard key={index} name={card.get("name")} img={card.get("thumbnail")} />
            )}
        </Carousel>



	</div>)
}

export default CocktailCarousel;