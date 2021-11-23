import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Card from "./Card";

const HarryPotter = () => {
  const [characters, setCharacters] = useState([]);
  const [sortedHouse, setSortedHouse] = useState([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(8);
  const prevCharacters = () => {
    if (prev !== 0) {
      setPrev(prev - 8);
      setNext(next - 8);
    }
  };
  const nextCharacters = () => {
    setPrev(prev + 8);
    setNext(next + 8);
  };

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
        {characters.slice(prev, next).map((character) => (
          <Card character={character} key={character.name} />
        ))}
      </ul>
      <button type="button" onClick={prevCharacters}>
        précédent
      </button>
      <button type="button" onClick={nextCharacters}>
        suivant
      </button>
    </div>
  );
};

export default HarryPotter;
