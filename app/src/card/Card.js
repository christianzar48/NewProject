import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./Card.css";
import ProgressBar from "@ramonak/react-progress-bar";
import PageNotFound from "../error/error";
import Loading from "../loading/loading";

function Card({ pokemones }) {

  const [cardPokemones, setCardPokemones] = useState([]);
  const [prevName, setPrevName] = useState("");
  const [nextName, setNextName] = useState("");
  const { name } = useParams();
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    fetch(`http://localhost:3000/homepage/${name}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.pokemon.length){
          setCardPokemones(data.pokemon)
        }
        else{
          navigate("/error404")
        }
      });
  }, [name]);

  let pokemon = cardPokemones ? cardPokemones[0] : null;
  
  useEffect(() => {
    if (pokemon) {
      const currentIndex = pokemones.findIndex((pokemones) => {
        return pokemones.name === pokemon.name;
      });
      if (currentIndex === 0) {
        setPrevName(pokemones[pokemones.length - 1].name);
      } else {
        setPrevName(pokemones[currentIndex - 1].name);
      }
      if (currentIndex === pokemones.length - 1) {
        setNextName(pokemones[0].name);
      } else {
        setNextName(pokemones[currentIndex + 1].name);
      }
    }
  }, [pokemon]);

  return (
    <>
      <div className="card-container">
        <div style={{ backgroundColor: `${pokemon?.color}` }} className="card">
          <div className="img-container">
            <Link to="/homepage">
              <img className="arrow-img" src="/Imagenes/arrow-left.svg" />
            </Link>
            <h1 style={{ color: "white" }} className="nameTag">
              {pokemon?.name}
            </h1>
            <div style={{ color: "white" }} className="idTag">
              #{pokemon?.id}
            </div>
          </div>
          <div className="boxImage">
            <div className="arrowScroll2">
            <Link to={`/homepage/${prevName}`}>
              <button>
                <img src="/Imagenes/Frame.svg" />
              </button>
            </Link>
            </div>
              <div className="card-image-container">
                <img className="card-image" src={`${pokemon?.img}`} />
              </div>
              <div className="arrowScroll1">
              <Link to={`/homepage/${nextName}`}>
                <button className="arrowScroll1">
                  <img className="arrowScroll" src="/Imagenes/Frame.svg" />
                </button>
              </Link>
              </div>
          </div>
          <div className="info-container">
            <div className="container">
              <div style={{backgroundColor:`${pokemon?.color}`}} className="types">{pokemon?.type1}</div>
                {pokemon?.type2 && (<div style={{backgroundColor: `${pokemon?.color2}`}} className="types">{pokemon?.type2}</div>)}
              </div>

            <h3 style={{ color: `${pokemon?.color}` }}>About</h3>

            <div className="about-pokemon">
              <p>{pokemon?.about}</p>
              <div className="weight">
                <div className="data-container">
                  <img src="/Imagenes/Weight.svg" />
                  <div>{pokemon?.weight}kg</div>
                </div>
                <div className="dataText">Weight</div>
              </div>
              <div className="height">
                <div className="data-container">
                  <img src="/Imagenes/Height.svg" />
                  <div>{pokemon?.height}m</div>
                </div>
                <div className="dataText">Height</div>
              </div>

              <div className="moves-container">
                <div className="moves">
                  {pokemon?.move1}
                  {pokemon?.move2 && <div>{pokemon?.move2}</div>}
                </div>
                <div className="dataText">Moves</div>
              </div>
            </div>

            <p>{pokemon?.info}</p>

            <div className="Stats">
              <h3 style={{ color: `${pokemon?.color}` }}>Base Stats</h3>
              <ul>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    HP
                  </div>
                  <div className="stats-value">{pokemon?.hp}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.hp}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    ATK
                  </div>
                  <div className="stats-value">{pokemon?.atk}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.atk}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    DEF
                  </div>
                  <div className="stats-value">{pokemon?.def}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.def}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    SATK
                  </div>
                  <div className="stats-value">{pokemon?.satk}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.satk}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    SDEF
                  </div>
                  <div className="stats-value">{pokemon?.sdef}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.sdef}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
                <li>
                  <div
                    style={{ color: `${pokemon?.color}` }}
                    className="stats-name"
                  >
                    SPD
                  </div>
                  <div className="stats-value">{pokemon?.spd}</div>
                  <ProgressBar
                    bgColor={pokemon?.color}
                    completed={pokemon?.spd}
                    maxCompleted={300}
                    height={5}
                    isLabelVisible={false}
                    className="file"
                    baseBgColor={pokemon?.color3}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
