import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharactersDetails = () => {
  const [character, setCahracter] = useState({})
  const { id } = useParams();
  useEffect(() => {
    axios.
      get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => setCahracter(res.data))
  }, [])

  console.log(character);
  return (
    <div>
      <h2>character details</h2>

      <ul>
        <li>
          {character.name}
        </li>
        <img src={character?.sprites.other.dream_world.front_default} alt="" />
      </ul>

    </div>
  );
};

export default CharactersDetails;
