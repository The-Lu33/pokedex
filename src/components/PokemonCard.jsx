import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios.get(url).then((res) => {
      setPokemon(res.data);
    });
  }, [url]);
  // console.log(pokemon);
  return (
    <Link to={`/characters/${pokemon?.id}`}>
      <h2>{pokemon?.name}</h2>
      <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
    </Link>
  );
};

export default PokemonCard;
