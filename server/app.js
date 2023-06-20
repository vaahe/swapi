const cors = require('cors');
const express = require('express');
require('dotenv').config();

const {extractFields} = require('./src/config');
const {getPeople} = require('./src/controllers/peopleController');
const {getPlanets} = require('./src/controllers/planetsController');
const {getStarships} = require('./src/controllers/starshipsController');

const app = express();

app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));

app.get('/search', async (req, res) => {
    try {
        const {query} = req.query;

        const people = await getPeople(query);
        const planets = await getPlanets(query);
        const starships = await getStarships(query);

        const peopleData = extractFields(people.results, ['name', 'height', 'gender']);
        const planetsData = extractFields(planets.results, ['name', 'diameter', 'population']);
        const starshipsData = extractFields(starships.results, ['name', 'crew', 'length']);

        const results = {
            people: peopleData,
            planets: planetsData,
            starships: starshipsData,
        };

        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

module.exports = app;