import "./header.css"
import React, { useState, useEffect} from "react";
import MyAccount from "../myAccount/MyAccount";

function Header ({setFilteredPokemons, searchText, searchHandler, pokemones, getPokemonsByName}) {

    const [sortPokes, setsortPokes] = useState("byID");

    function sortByName() {
      const sortName = pokemones.sort((a, b) => (a.name > b.name ? 1 : -1));
      setFilteredPokemons(sortName);
      setsortPokes("byName");
    }
  
    function changeSort() {
      setFilteredPokemons(pokemones);
      setsortPokes("byID");
    }
  
    const initialText = "#";
    const [buttonText, setButtonText] = useState(initialText);
  
    function handleClick() {
      if (buttonText == "A") {
        setButtonText("#");
      } else {
        setButtonText("A");
      }
    }

  const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="head">
            <div className="head-container">
                <img className="pokeball-img" src="/Imagenes/Pokeball.png" />
                <h1>Pokédex</h1>
                <button onClick={getPokemonsByName} className="sortButton">
                    <img src="/Imagenes/Arrow.svg" />
                </button>
                <div className="btnLog">
                    <button onClick={() => setIsOpen(true)} className="logIn">GO!</button>

                    <MyAccount open={isOpen} onClose={() => setIsOpen(false)}>
                    </MyAccount>
                </div>
            </div>
            <div className="searchBar">
                <input
                type="text"
                placeholder="🔍︎ Search"></input>
            </div>
        </div>
    )
}

export default Header;