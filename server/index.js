const express = require('express');
const cors = require('cors');

const pokemonesRoute = require('./routes/pokemonesDB');
const usersRoute = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/homepage', pokemonesRoute)
app.use('/user', usersRoute)

app.listen(3000, function () {
    console.log('App corriendo en puerto 3000');
});