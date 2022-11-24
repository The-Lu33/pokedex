import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const pokemonPerPage = 16;
  const lastIndex = page + pokemonPerPage;
  const firsIndex = lastIndex - pokemonPerPage;
  const totalPages = Math.ceil(characters.length / pokemonPerPage);
  const number = [];
  for (let i = 1; i <= totalPages; i++) {
    number.push(i);
  }
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

  // console.log(speciePok[0].name);

  const searchCharacter = () => {
    alert(characterName);
    navigate(`/characters/${characterName}`);
  };
  const filterType = (e) => {
    const url = e.target.value;
    axios
      .get(url)
      .then((res) =>
        setCharacters(res.data.pokemon.map((pokemon) => pokemon.pokemon))
      );
    // console.log(e.target.value);
  };
  return (
    <div>
      <h2 className="welco">Welcome {userName}, ready to find your next pokemon</h2>
      <div className="search_poke">

      <div className="input search_characters">

      <input
        type="text"
        placeholder="search character"
        value={characterName}
        onChange={(e) => setcharacterName(e.target.value)}
        />
      <button onClick={searchCharacter}>Search</button>

        </div>
        <div className="select_type">

      <select onChange={filterType}>
        {speciePok.map((speciePok) => (
          <option key={speciePok.name} name="" id="" value={speciePok.url}>
            {speciePok.name}
          </option>
        ))}
      </select>
        </div>
        </div>


      <div className="card_container"> 
        {pokemonPaginated.map((character) => (
          <ul className="card_a" key={character.url ? character.url : character.pokemon.name}>
            <PokemonCard
              url={character.url ? character.url : character.pokemon.name}
            />
          </ul>
        ))}
      </div>

      <div>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev Page
        </button>

        {number.map((number) => (
          <button onClick={() => setPage(number)} key={number}>
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
