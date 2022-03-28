'use strict'

const config = require('./config')

const express = require('express');
const bodyParser = require('body-parser');
const register = require("./backend/routes/register");
const login = require('./backend/routes/login');
const addStudents = require('./backend/routes/addtostudents');
const addGames = require('./backend/routes/addtogames');
const routes = require('./backend/routes/sendgamestofrontend');
const games = require('./backend/routes/seendgamesdata');
const getData = require('./backend/routes/getstudentarray');


const app = express();
// 
// app.use(jsend());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/sendgames", games);
app.use("/routes", routes);
app.use("/register", register);
app.use("/login", login);
app.use("/students", addStudents);
app.use("/games", addGames);
app.use("/getData", getData);
const port = process.env.PORT || 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.get('api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Server Listening on http://localhost:${port}`));