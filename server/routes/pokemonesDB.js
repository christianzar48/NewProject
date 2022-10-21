const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const obtainPokemons = require("../db/index")
const { verifyToken } = require('../middlewares/jwt');


router.get('/', verifyToken, async(req, res) => {
    const pokemons = await obtainPokemons.query("SELECT * FROM pokemones ORDER BY id ASC")
    res.json({status: true, pokemons:pokemons.rows, mensaje: "Lista de todos los pokemones"})
})

router.get('/:name', async(req,res) => {
    const name = req.params.name
    const pokemon = await obtainPokemons.query("SELECT * FROM pokemones WHERE name=$1", [name])
    res.json({pokemon:pokemon.rows})
})

router.get('/pokemon/:id', async(req, res) => {
    const id = req.params.id
    const pokemon = await obtainPokemons.query("SELECT * FROM pokemones WHERE id=$1", [id])
    res.json({pokemon:pokemon.rows})
})

router.post('/add', async (req, res) => {
    const newPokemon = req.body;
    if (newPokemon.name, newPokemon.id, newPokemon.type1, newPokemon.type2, newPokemon.weight, newPokemon.height, newPokemon.move1, newPokemon.move2, newPokemon.info, newPokemon.hp, newPokemon.atk, newPokemon.def, newPokemon.satk, newPokemon.sdef, newPokemon.spd, newPokemon.color, newPokemon.color2, newPokemon.color3, newPokemon.img) {
        await obtainPokemons.query("INSERT INTO pokemones (name, id, type1, type2, weight, height, move1, move2, info, hp, atk, def, satk, sdef, spd, color, color2, color3, img) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)", [newPokemon.name, newPokemon.id, newPokemon.type1, newPokemon.type2, newPokemon.weight, newPokemon.height, newPokemon.move1, newPokemon.move2, newPokemon.info, newPokemon.hp, newPokemon.atk, newPokemon.def, newPokemon.satk, newPokemon.sdef, newPokemon.spd, newPokemon.color, newPokemon.color2, newPokemon.color3, newPokemon.img])
      const pokemonDB = await obtainPokemons.query("SELECT * FROM pokemones WHERE id=$1", [newPokemon.id])
      res.json({ success:true, pokemonDB:pokemonDB.rows[0], mensaje: "tu pokemon se ha añadido correctamente"})
    }else {
      res.json({success:false, message : "No hemos podido crear el pokemon"})
    }
});

module.exports = router