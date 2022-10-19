import Header from "../header/Header";
import "./homepageCards.css"
import { Link, useNavigate } from "react-router-dom"
import React, { useState, useEffect } from "react";
import Add from "../add/add";

function Homepage() {

  const navigate = useNavigate();

    const [pokemones, setPokemones] = useState([]);
    const [searchText, setSearchText] = useState("");
    const searchHandler = (e) => {
      setSearchText(e.target.value.toLowerCase());
    };

    function getPokemons() {
        fetch("http://localhost:3000/homepage", {
          method: "GET",
          headers: {"Content-Type" : "application/json",
          'auth-token' : localStorage.getItem('token')
        }
        }).then(res => res.json())
        .then(data => {
          if (data.pokemons) {
            setPokemones(data.pokemons)
          console.log(data.pokemons)
          } else {
            localStorage.clear();
            navigate('/')
          }
        })
    }

    useEffect(() => {
        getPokemons();
        console.log(pokemones);
        if (searchText) {
          const filteredPokemons = pokemones.filter(
            (pokemon) => pokemon.name.includes(searchText)
          );
          setPokemones(filteredPokemons);
        }
        else {setPokemones(pokemones)};
    }, [searchText]);

    return(
        <div className="home-container">
            <Header
                searchText={searchText}
                searchHandler={searchHandler}
                setPokemones={setPokemones}
            />
        <div className="flex-container">
                <Link to={`/add-pokemon`}>
                    <Add />
                </Link>
            {pokemones.map((pokemon) => (
                <HomepageCards pokemon = {pokemon} />
            ))}
        </div>
      </div>
    )
}

const HomepageCards = ({pokemon}) => {
    return(
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
        <img
          className="pokemon-image"
          src={`/Imagenes/${pokemon.name}.png`}
        />
        <div
          style={{ backgroundColor: `${pokemon.color}` }}
          className="name"
        >
          {pokemon.name}
        </div>
      </div>
    </Link>
    )
}

export default Homepage;