import React, {useEffect} from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestExample from "../../components/RequestExample.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import cocktails from "../../assets/cocktails.json"
import CocktailCard from "../../components/CocktailCard.jsx";
import ReactDOM from "react-dom";

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
        <SearchBar cocktails={cocktails}/>
      <RequestExample/>
      <Footer/>
    </div>
  );
}

export default Home;
