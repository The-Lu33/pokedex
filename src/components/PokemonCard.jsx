import axios from "axios";
import { useState, useEffect } from "react";
const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
    });
  }, [url]);
  console.log(pokemon);
  return (
    <div>
      <h2>{pokemon?.name}</h2>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
    </div>
  );
};

export default PokemonCard;
