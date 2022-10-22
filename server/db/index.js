const { Pool } = require("pg");

const obtainPokemons = new Pool ({
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "AllCaste2.",
        port: 5432
});

module.exports = obtainPokemons
