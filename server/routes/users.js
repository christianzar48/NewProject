const express = require('express');
const { Pool } = require('pg');
const router = express.Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { TOKEN_SECRET, verifyToken } = require('../middlewares/jwt');

const users = require("../db/index");
const { application } = require('express');

// Register

router.post('/signin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = { name: req.body.name, email: req.body.email, password: hashedPassword }
        await users.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3)", [user.name, user.email, user.password])
        res.status(201).send('Usuario creado correctamente')  
    } catch {
        res.status(500).send()
    }

})

// Login

router.post('/login', async (req, res) =>{
    try {
        const user = await users.query("SELECT * FROM users WHERE email = $1", [req.body.email])
        const array = user.rows
        if (user.rowCount <= 0) {
            return res.status(400).json({ error: "Email not found" })
        }

        const validPassword = await bcrypt.compare(req.body.password, array[0].password);
        if (!validPassword) {
            return res.status(400).json({ error: "Email and Password doesn't match"})
        }

        // Crear token
        const token = jwt.sign({
            email: user.email,
            name: user.name
        }, TOKEN_SECRET)

        res.json({ error: null, data: 'Successful Login!', user: array[0], token}).status(200);
        console.log('Success')
        


    } catch(err) {
        return res.json({ success: false, message: 'Error with database' + JSON.stringify(err)})
    }
});

router.get('/')

module.exports = router