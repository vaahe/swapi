const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://swapi.dev/api/');
        const resp = await axios.get(response.data.people);
        res.json(resp.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
})

module.exports = app;