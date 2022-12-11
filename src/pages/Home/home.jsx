import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import RequestExample from "../../components/RequestExample.jsx";

function Home() {
  return (
    <body>
      <Header />
      <h1>Home</h1>
      <h2>Vite + React (Hamburger + Responsive + Router)</h2>
      <RequestExample/>
      <Footer/>
    </body>
  );
}

export default Home;
