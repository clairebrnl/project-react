import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Card from "./Card";

const HarryPotter = () => {
  const [characters, setCharacters] = useState([]);
  const [sortedHouse, setSortedHouse] = useState([]);

  useEffect(() => {
    axios
      .get("http://hp-api.herokuapp.com/api/characters")
      .then((res) => res.data)
      .then((data) => {
        setCharacters(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="api">
      <Navigation />
      <ul className="api-list">
        {characters.map((character) => (
          <Card character={character} key={character.name} />
        ))}
      </ul>
    </div>
  );
};

export default HarryPotter;
