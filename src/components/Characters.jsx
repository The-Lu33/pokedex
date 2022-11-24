import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [inputNumber, setInputNumber] = useState(16);

  const lastIndex = page + inputNumber;
  const firsIndex = lastIndex - inputNumber;
  const totalPages = Math.ceil(characters.length / inputNumber);
  const [typeOrName, setTypeOrName] = useState(false);
  const [settingPaginate, setSettingPaginate] = useState(false);
  const number = [];
  useEffect(() => {
    for (let i = 1; i <= totalPages; i++) {
      number.push(i);
    }
  }, totalPages);

  const userName = useSelector((state) => state.name);

  const navigate = useNavigate();
  const [characterName, setcharacterName] = useState("");
  const [speciePok, setspeciePok] = useState([]);
  const pokemonPaginated = characters.slice(firsIndex, lastIndex);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
      .then((res) => {
        setCharacters(res.data.results);
      });
    axios.get("https://pokeapi.co/api/v2/type/").then((res) => {
      setspeciePok(res.data.results);
    });
  }, []);


  const searchCharacter = () => {
    navigate(`/characters/${characterName}`);
  };
  const filterType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then((res) =>
        setCharacters(res.data.pokemon.map((pokemon) => pokemon.pokemon))
      );
  };

  // detectar cambio de input checkbox
  const handleCheckbox = () => {
    setTypeOrName(!typeOrName);
  };

  return (
    <div>
      <h2 className="welco">
        Welcome {userName}, ready to find your next pokemon
      </h2>
      <div className="check_container">
        <span>Name</span>
        <input type="checkbox" checked={typeOrName} onChange={handleCheckbox} />

        <span>Type</span>
      </div>

      <div className="search_poke">
        {typeOrName ? (
          <div className=" select_type">
            <select onChange={filterType}>
              {speciePok.map((speciePok) => (
                <option
                  key={speciePok.name}
                  name=""
                  id=""
                  value={speciePok.url}>
                  {speciePok.name}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div className="input search_characters">
            <input
              type="text"
              placeholder="search character"
              value={characterName}
              onChange={(e) => setcharacterName(e.target.value)}
            />
            <button onClick={searchCharacter}>Search</button>
          </div>
        )}
      </div>

      <div className="card_container">
        {pokemonPaginated.map((character) => (
          <ul
            className="card_a"
            key={character.url ? character.url : character.pokemon.name}>
            <PokemonCard
              url={character.url ? character.url : character.pokemon.name}
            />
          </ul>
        ))}
      </div>

      <div>

        <div className="pagination">
         <button onClick={()=>setSettingPaginate(!settingPaginate)} >ajuste</button>
          {
            settingPaginate &&  <div>
            <button onClick={()=> setInputNumber(4)} >4</button>
            <button onClick={()=> setInputNumber(8)} >8</button>
            <button onClick={()=> setInputNumber(16)} >16</button>
            <button onClick={()=> setInputNumber(32)} >32</button>
          </div>
          }
       
        </div>
        <br />
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev Page
        </button>

        {number.map((number) => (
          <button className="page" onClick={() => setPage(number)} key={number}>
            {number}{" "}

          </button>
        ))}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}>
          {" "}
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Characters;
