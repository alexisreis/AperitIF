import React from 'react';

import DefaultCocktail from "../../assets/default_cocktail.jpg";

import "./member.scss";


const Member = ({name, description, fuel, country, mail}) => {

   return (
      <div className="member-card">

        <img className="member-profile-picture" src={DefaultCocktail} alt={name} />

        <div>
            <h3>Hi, I'm <span>{name}</span><span className="hand">🤚</span>
            </h3>
            <h4>I'm {description}.</h4>
            <ul className="emoji-bullets">
              <li>🇫🇷 Based in {country}</li>
              <li>☕ Powered by {fuel}</li>
              <li>🎓 Student at INSA Lyon</li>
              <li>📧 {mail}</li>
            </ul>
         </div>
      </div>
   )
}

export default Member;