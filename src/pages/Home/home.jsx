import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";

import cocktails from "../../assets/cocktails.json";

function Home() {
  return (
    <>
      <Header />
      <h1>Home</h1>
      <h2>Vite + React (Hamburger + Responsive + Router)</h2>
        <SearchBar cocktails={cocktails} />;
      <Footer/>
    </>
  );
}

export default Home;
