import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestExample from "../../components/RequestExample.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function Home() {
  return (
    <>
      <Header />
        <div className="bodyPage">
          <h1>'Bienvenue' as we say in French !</h1>
            <SearchBar/>
            <RequestExample/>
        </div>
      <Footer/>
    </>
  );
}

export default Home;
