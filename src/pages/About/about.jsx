import React from "react";
import Header from "../../components/Header/header.jsx";
import Footer from "../../components/Footer/footer.jsx";
import Member from "../../components/Member/member.jsx";

function about() {
  return (
    <div>
      <Header />
      <h1>À propos</h1>
      <h2>Projet réalisé par 7 étudiants de 4ème année du département informatique de l'INSA de Lyon dans le cadre d'un mini-projet de cours.</h2>
      <h1>Membres de l'équipe</h1>
      <Member name="Mael"/>
      <Member name="Corentin"/>
      <Member name="Mohamed"/>
      <Member name="Simon"/>
      <Member name="Alexis"/>
      <Member name="Colin"/>
      <Member name="Eva"/>
      <Footer/>
    </div>
  );
}

export default about;
