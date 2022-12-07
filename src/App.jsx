import {useState, useEffect} from 'react'
import reactLogo from '../public/cocktails.png'
import './App.css'
import CountButton from "./components/CountButton.jsx";
import RequestExample from "./components/RequestExample.jsx";

function App() {



	return (
		<div className="App">
			<div>
				<a href="/" target="_blank">
					<img src={reactLogo} className="logo" alt="Cocktail"/>
				</a>
			</div>
			<h1>Aperit'IF</h1>

			<input type="text" id="recherche" placeholder="Rechercher un truc..."/>

			{/*Ici mon composant personnalisé CountButton dans `components/`*/}
			<CountButton />

			<RequestExample />

			<p>
				Changer <code>src/App.jsx</code> et enregistrer pour voir
				ces changements en live
			</p>
		</div>
	)
}

export default App
