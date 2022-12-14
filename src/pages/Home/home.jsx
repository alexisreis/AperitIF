import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestExample from "../../components/RequestExample.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import cocktails from "../../assets/cocktails.json"

function Home() {
  return (
    <div>
      <Header />
      <h1>Home</h1>
        <SearchBar/>
      <RequestExample/>
      <Footer/>
    </div>
  );
}

export default Home;
