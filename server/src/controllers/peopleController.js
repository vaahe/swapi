const axios = require('axios');
const {BASE_URL} = require('../config');

const getPeople = async (query) => {
    try {
        const response = await axios.get(`${BASE_URL}/people/?search=${query || ''}`);
        const {results, next} = response.data;

        return {results, next};
    } catch (error) {
        console.error('Error retrieving people from SWAPI:', error);
        throw error;
    }
};

module.exports = {getPeople};