import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import {CocktailRequest} from "../../utils/dbpediaRequests.js";
import CocktailCarousel from "../../components/Cocktail/CocktailCarousel.jsx";

import './CocktailPage.css'

const CocktailPage = () => {

    const {nameCocktail} = useParams();

    const [cocktail, setCocktail] = useState({
        name: "",
        img: "",
        comments: "",
        served: "",
        ingredients_names: [],
        ingredients_quantities: [],
    })
    const [cocktailsIngredients, setCocktailsIngredients] = useState([]);
    const [numberOfDrinks, setNumberOfDrinks] = useState(1);


    const rechercher = async () => {

        const recherche = CocktailRequest(nameCocktail);
        const url = "https://dbpedia.org/sparql?query=" + encodeURIComponent(recherche) + "&format=json";

        try {
            const response = await fetch(url);
            const data = await response.json();
            parseCocktailRequestData(data);
        } catch (error) {
            console.log(error);
        }
    }

    const parseCocktailRequestData = (data) => {

        var name = data.results.bindings[0].name.value;
        var img = data.results.bindings[0].thumbnail.value;
        var comments = data.results.bindings[0].comments.value;
        var served = data.results.bindings[0].served.value;
        var ingredients_names = [];
        var ingredients_quantities = [];

        var ingredients = data.results.bindings[0].ingredients.value;
        var myIndex = ingredients.toString().indexOf('*', 0);
        var i = 0;

        while (myIndex != -1) {
            const pastIndex = myIndex;
            myIndex = ingredients.toString().indexOf('*', myIndex + 1);
            // console.log(pastIndex, myIndex, ingredients.toString().length-1);
            let jj = 0;
            if (myIndex != -1) {
                const ingreTemp = ingredients.toString().substring(pastIndex + 1, myIndex);
                for (jj; jj < ingreTemp.length; jj++) {
                    var caraTemp = ingreTemp.charAt(jj);
                    // console.log("caraTemp"+caraTemp);
                    if ((caraTemp >= '0' && caraTemp <= '9') || caraTemp == ' ' || caraTemp == ',' || caraTemp == '.') {
                        // console.log("number: "+ caraTemp);
                    } else {
                        if (jj != 0) {
                            ingredients_quantities[i] = ingreTemp.substring(0, jj);
                        } else {
                            ingredients_quantities[i] = " ";
                        }
                        break;
                    }
                }
                ingredients_names[i] = ingredients.toString().substring(pastIndex + 1 + jj, myIndex);
            } else {
                const ingreTemp2 = ingredients.toString().substring(pastIndex + 1, ingredients.toString().length);
                for (jj; jj < ingreTemp2.length; jj++) {
                    var caraTemp2 = ingreTemp2.charAt(jj);
                    // console.log("caraTemp"+caraTemp2);
                    if ((caraTemp2 >= '0' && caraTemp2 <= '9') || caraTemp2 == ' ' || caraTemp2 == ',' || caraTemp2 == '.' || caraTemp2 == '*') {
                        // console.log("number: "+ caraTemp2);
                    } else {
                        if (jj != 0) {
                            ingredients_quantities[i] = ingreTemp2.substring(0, jj);
                        } else {
                            ingredients_quantities[i] = " ";
                        }
                        break;
                    }
                }
                ingredients_names[i] = ingredients.toString().substring(pastIndex + 1 + jj, ingredients.toString().length);
            }
            i = i + 1;
        }

        setCocktail({
            name: name,
            img: img,
            comments: comments,
            served: served,
            ingredients_names: ingredients_names,
            ingredients_quantities: ingredients_quantities,
        })

        var mapIngredients = new Map();
        var arrayIngredients = [];

        data.results.bindings.forEach(r => {
            if (!mapIngredients.has(r.nameIngredients.value)) {
                mapIngredients.set(r.nameIngredients.value, []);
                var temp = new Map();
                temp.set("ingredient", r.nameIngredients.value);
                arrayIngredients.push(temp);
            }
            arrayIngredients.forEach(t => {
                if (t.get("ingredient") === r.nameIngredients.value) {
                    if (!t.has("cocktails")) {
                        t.set("cocktails", []);
                    }
                    var temp = new Map();
                    temp.set("name", r.nameSPSP.value);
                    temp.set("thumbnail", r.thumbnailSP.value);

                    if (t.get("cocktails").filter(u => u.get("name") == r.nameSPSP.value).length == 0 && temp.get("name") != nameCocktail.nameCocktail) {
                        t.get("cocktails").push(temp);
                    }
                }
            })
            mapIngredients.get(r.nameIngredients.value).push(r.nameSPSP.value);
        })
        setCocktailsIngredients(arrayIngredients);
    }

    const increaseNumberOfDrinks = () => {
        setNumberOfDrinks(numberOfDrinks + 1);

        // Increase quantity of ingredients
        var newCocktail = cocktail;
        newCocktail.ingredients_quantities.forEach((q, index) => {
            if (q !== " ") {
                var newQ = q.replace(',', '.');
                newCocktail.ingredients_quantities[index] = (parseFloat(newQ) / numberOfDrinks * (numberOfDrinks + 1)).toString().replace('.', ',');
            }
        });
        setCocktail(newCocktail);
    }

    const decreaseNumberOfDrinks = () => {
        if (numberOfDrinks > 1) {
            setNumberOfDrinks(numberOfDrinks - 1);

            // Decrease quantity of ingredients
            var newCocktail = cocktail;
            newCocktail.ingredients_quantities.forEach((q, index) => {
                if (q !== " ") {
                    var newQ = q.replace(',', '.');
                    newCocktail.ingredients_quantities[index] = (parseFloat(newQ) / numberOfDrinks * (numberOfDrinks - 1)).toString().replace('.', ',');
                }
            });
            setCocktail(newCocktail);
        }
    }

    useEffect(() => {
        rechercher();
        setNumberOfDrinks(1);
        window.scrollTo(0, 0);
    }, [nameCocktail]);

    return (<>
        <div id="resultatOneCocktail">
            <h1 id='h1cocktail'>{cocktail.name}</h1>
            <div className='align'>
                <div>
                    <p id="comments">{cocktail.comments}</p>
                    <div id="ingredients">
                        <div className="align">
                            <button className='numberPersonsPlusMoins'
                                    disabled={numberOfDrinks === 1}
                                    onClick={decreaseNumberOfDrinks}>-
                            </button>
                            <p
                                className="textNumberPersons">For {numberOfDrinks} drink{numberOfDrinks > 1 && 's'}</p>
                            <button className='numberPersonsPlusMoins'
                                    onClick={increaseNumberOfDrinks}>+
                            </button>
                        </div>

                        {cocktail.ingredients_names.length > 0 && cocktail.ingredients_names.map((ingredient, index) =>
                            <div className='eachIngredient' key={ingredient}>
                                ➡️ {!isNaN(cocktail.ingredients_quantities[index]) && <label
                                className='ab'>{cocktail.ingredients_quantities[index]} </label>}
                                {ingredient}
                            </div>)}
                    </div>
                </div>
                <div>
                    <img id='imgCocktail' src={cocktail.img}/>
                    <div id='served'> Served on: {cocktail.served}</div>
                </div>
            </div>
        </div>

        {cocktailsIngredients.map((ingredient, index) => <div key={ingredient.get("ingredient")}>
            <h3> Cocktails also containing : {ingredient.get("ingredient")} </h3>
            <CocktailCarousel key={index} cocktails={ingredient.get("cocktails")}/>
        </div>)}
    </>)
}

export default CocktailPage;