const { Pool } = require("pg");

const obtainPokemons = new Pool ({
        user: "postgres",
        host: "localhost",
        database: "postgres",
        password: "Milocho91",
        port: 5432
});

module.exports = obtainPokemons
