import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestExample from "../../components/RequestExample.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
        <SearchBar/>
      <RequestExample/>
      <Footer/>
    </>
  );
}

export default Home;
