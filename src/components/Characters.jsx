import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
const Characters = () => {
  const userName = useSelector((state) => state.name);
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      //   .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((res) => {
        setCharacters(res.data.results);
      });
  }, []);

  return (
    <div>
      <h2>characters</h2>
      <h2>welcome {userName}</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.name}><PokemonCard url={character.url}/></li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
