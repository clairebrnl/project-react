import React from "react";

const Card = ({ character }) => (
  <li className="card">
    <div className="character-container">
      <ul>
        <h1>{character.name}</h1>
        <p>{character.house}</p>
      </ul>
    </div>
    <img src={character.image} alt="imgchar" />
  </li>
);

export default Card;
