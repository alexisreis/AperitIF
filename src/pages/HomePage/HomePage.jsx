import React from "react";

import CocktailList from "../../components/Cocktail/CocktailList.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function HomePage() {
    return (<>
        <div id="welcomeText">
            <h1>Santé !</h1>
            <h2>as we say in France</h2>
        </div>

        <SearchBar/>

        <h2>May we propose a cocktail :</h2>
        <CocktailList/>
    </>);
}

export default HomePage;
