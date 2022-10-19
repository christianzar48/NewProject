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

router.post('/add-pokemon', async(req, res) => {
    const add = req.body
    const addPokemon = await obtainPokemons.query("INSERT * INTO pokemones VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19", [add.name, add.id])
    res.json({success:true, addPokemon:addPokemon.rows[0], message: "Pokemon creado correctamente!"})
})

module.exports = router