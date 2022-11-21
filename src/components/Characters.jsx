import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage]=useState(1);
  const pokemonPerPage=10;
  const lastIndex=page+ pokemonPerPage;
  const firsIndex=lastIndex- pokemonPerPage
  const totalPages= Math.ceil( characters.length/pokemonPerPage);
  const number=[];
  for(let i=1;i<=totalPages;i++){
    number.push(i);
  }
  const userName = useSelector((state) => state.name);
  
  const navigate = useNavigate();
  const [characterName, setcharacterName] = useState("")
  const [speciePok, setspeciePok] = useState([])
  const pokemonPaginated = characters.slice(firsIndex, lastIndex)
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1154")
      //.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
      .then((res) => {
        setCharacters(res.data.results);

      });
    axios
      .get('https://pokeapi.co/api/v2/type/')
      .then((res) => {
        setspeciePok(res.data.results);
      });
  }, []);


  const searchCharacter = () => {
    alert(characterName)
    navigate(`/characters/${characterName}`)


  }
  const filterType = (e) => {
    const url = (e.target.value)
    axios.get(url)
      .then(res => setCharacters(res.data.pokemon))
    alert(res.data.pokemon);

  }
  return (
    <div>
      <h2>characters</h2>
      <p>welcome {userName}</p>
      <input
        type="text"
        placeholder="search character"
        value={characterName}
        onChange={e => setcharacterName(e.target.value)}
      />
      <button onClick={searchCharacter}>Search</button>
      <select >
        {speciePok.map(speciePok => (
          <option key={speciePok.name} onChange={filterType} name="" id=""
            value={speciePok.url}>
            {speciePok.name}</option>
        ))}

      </select>
      <div >
        <button onClick={()=>setPage(page-1)}
        disabled={page===1}
        >Prev Page</button>

        {number.map(number=>(
          <button onClick={()=>setPage(number)} key={number}>{number} </button>
        )
        )}
        <button onClick={()=>setPage(page+1)}
        disabled={page===totalPages}
        > Next Page</button>
      </div>
      
      <ul >
        {pokemonPaginated.map((character) => (
          <li key={character.url ? character.url : character.pokemon.name}>
            <PokemonCard url={character.url ? character.url : character.pokemon.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Characters;
