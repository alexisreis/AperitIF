import React from 'react';

import "./member.scss";


const Member = ({name, picture, description, fuel, country, mail}) => {

   return (
      <div className="member-card">

        <img className="member-profile-picture" src={picture} alt={name} />

        <div>
            <h3>Hi, I'm <span>{name}</span><span className="hand">🤚</span></h3>
            <p>I'm <span className="member-description">{description}</span></p>
            <ul>
              <li>🌍 Based in <strong>{country}</strong></li>
              <li>☕ Powered by {fuel}</li>
              <li>🎓 Student at <strong>INSA Lyon</strong></li>
              <li>📧 <a href={`mailto:${mail}`}>{mail}</a></li>
            </ul>
         </div>
      </div>
   )
}

export default Member;