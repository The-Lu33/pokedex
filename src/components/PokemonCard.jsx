import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch((err) => console.log("error", err));
  }, [url]);
  // console.log(pokemon);
  const type = pokemon?.types[0].type.name;
  

  return (
    <li className={`${type} list`}>
      <Link to={`/characters/${pokemon?.id}`} className="card">
        <div className="img">
          <img src={pokemon?.sprites.other.dream_world.front_default} alt="" />
        </div>
        <div className="info">
          <div className={`name ${type}`}>
            <h2>{pokemon?.name}</h2>

            <h5>Type</h5>
            {pokemon?.types.map((type, index) => (
              <h2 className="typetext" key={index}>
                {type.type.name}
              </h2>
            ))}
          </div>
          <div className={`${type} text`}>
            <div>
              <h5>HP</h5>
              <h3>{pokemon?.stats[0].base_stat}</h3>
            </div>
            <div>
              <h5>Attack</h5>
              <h3>{pokemon?.stats[1].base_stat}</h3>
            </div>
            <div>
              <h5>Defense</h5>
              <h3>{pokemon?.stats[2].base_stat}</h3>
            </div>
            <div>
              <h5>Speed</h5>
              <h3>{pokemon?.stats[5].base_stat}</h3>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PokemonCard;
