import Header from "../header/Header";
import "./homepageCards.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Add from "../add/add";
import Loading from "../loading/loading";


function Homepage({ pokemones }) {
  const navigate = useNavigate();

  const [searchText, setSearchText] = useState("");
  const [filteredPokemons, setFilteredPokemons] = useState(pokemones);
  const searchHandler = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const changePokemons = (newPokemones) => {
    setFilteredPokemons([...newPokemones])
  }

  useEffect(()=>{
    if (filteredPokemons !== pokemones){
      setFilteredPokemons(pokemones)
    }
  },[pokemones]);


  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  },[]);
  
  useEffect(() => {
    if (searchText) {
      const pokemonFiltrado = pokemones.filter(
        (pokemon) => pokemon.name.toLowerCase().includes(searchText)
      );
      setFilteredPokemons(pokemonFiltrado);
    }
    else {setFilteredPokemons(pokemones)};
  }, [searchText]);
  
      return (
    <div className="home-container">
      <Header
        searchText={searchText}
        searchHandler={searchHandler}
        setFilteredPokemons={changePokemons}
        pokemones={pokemones}
      />
      <div className="flex-container">
        <Link to={`/add-pokemon`}>
          <Add />
        </Link>
        {filteredPokemons.map((pokemon) => (
          <HomepageCards pokemon={pokemon} key={pokemon.name} />
        ))}

      </div>
    </div>
  );
}

const HomepageCards = ({ pokemon }) => {
  return (
    <Link
      key={pokemon.name}
      style={{ textDecoration: "none" }}
      to={`/homepage/${pokemon.name}`}
    >
      <div
        style={{ borderColor: `${pokemon.color}` }}
        className="pokemon-container"
      >
        <span style={{ color: `${pokemon.color}` }} className="id-number">
          #{pokemon.id}
        </span>
        <img className="pokemon-image" src={`${pokemon.img}`} />
        <div style={{ backgroundColor: `${pokemon.color}` }} className="name">
          {pokemon.name}
        </div>
      </div>
    </Link>
  );
};

export default Homepage;
