import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CharactersDetails = () => {
  const [character, setCahracter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setCahracter(res.data));
  }, []);

  const typebg = character.types?.[0].type.name;
  console.log(character);

  // porcentage de vida
  function porcentage(valor) {
    return ((valor - 150) * 100) / 150 + 100;
  }

  return (
    <div className={`charactersdetails ${typebg}`}>
      <Link className="btn_return" to="/poke-characters">
        <img src="./image/arrow-back-.png" alt="back"  />
      </Link>

      <div className="poke_portade">
        <div className={`poke_img`}>
          <img
            src={character?.sprites?.other.dream_world.front_default}
            alt=""
          />
        </div>
        <div className="poke_name">
          <h2>{character.name}</h2>
        </div>
        <div className={`measures`}>
          <div>
            <span>Weight</span>
            <h2>{character.weight}</h2>
          </div>
          <div>
            <span>Height</span>
            <h2>{character.height}</h2>
          </div>
          <div>
            <span>Base experience</span>
            <h2>{character.base_experience}</h2>
          </div>
        </div>
      </div>
      {}
      <div className={`type_poke`}>
        <h2>Type</h2>
        <div className="type_text">
          {character?.types?.map((type, index) => (
            <div className={type.type.name} key={index}>
              <h2>{type.type.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className={`abilities`}>
        <h2>Abilities</h2>
        <ul>
          {character?.abilities?.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>
      </div>
      <div className={`stats`}>
        <h2>Stats</h2>
        <ul>
          {character?.stats?.map((stat, index) => (
            <li key={index}>
              <div className="bars_stats">
                <span>{stat.stat.name}: </span>
                <div className="bars">
                  <div
                    className="bars_color"
                    style={{ width: `${porcentage(stat.base_stat)}%` }}>
                    <span className="bars_porcent">{stat.base_stat}/150</span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={`moves`}>
        <h2>Moves</h2>
        <ul>
          {character?.moves?.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharactersDetails;
