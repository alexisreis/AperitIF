import React from "react";

import CocktailList from "../../components/Cocktail/CocktailList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

import CocktailLogo from "../../assets/cocktails.png";

import "./HomePage.css";

function HomePage() {
    return (<>
        <div id="presentation-section">
            <img src={CocktailLogo} alt="AperitIF Logo"/>
            <div id="presentation-content">
                <h1>🍻 Santé !</h1>
                <h2>as we say in <span id="fr">Fr</span><span id="an">an</span><span id="ce">ce</span> 🥖</h2>
                <SearchBar/>
            </div>

        </div>



        <h2>Thirsty? May we propose a cocktail :</h2>
        <CocktailList/>
    </>);
}

export default HomePage;
