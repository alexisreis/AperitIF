import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";

function NotFound() {
  return (
    <body>
      <Header />
      <div className="mainApp">
          <h1>Breuvage inconnu</h1>
          <h3>Il est très déconseillé de boire ça...</h3>
      </div>
      <Footer/>
    </body>
  );
}

export default NotFound;
