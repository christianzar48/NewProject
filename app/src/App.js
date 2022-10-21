import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./main/Main";
import Register from "./register/register";
import Homepage from "./homepage/homepage";
import Card from "./card/Card";
import AddForm from "./add/form";
import React, { useEffect, useState } from "react";
import PageNotFound from "./error/404";


function App() {
  const [pokemones, setPokemones] = useState([]);
  const [authToken, setAuthToken] = useState(localStorage.getItem('token'));

  function getPokemons() {
    if (authToken) {
      fetch("http://localhost:3000/homepage", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.pokemons) {
            setPokemones(data.pokemons);
            console.log(data.pokemons);
          } else {
            localStorage.clear();
          }
        });
    }
  }
  useEffect(() => {
    getPokemons();
  }, [authToken]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main setAuthToken={setAuthToken}/>} />
          <Route
            path="/homepage"
            element={<Homepage pokemones={pokemones} />}
          />
          <Route
            path="/homepage/:name"
            element={<Card pokemones={pokemones} />}
          />
          <Route
            path="/homepage/:name/:id"
            element={<Card pokemones={pokemones} />}
          />
          <Route path="/signin" element={<Register />} />
          <Route path="/add-pokemon" element={<AddForm />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
