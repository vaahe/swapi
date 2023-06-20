require('dotenv').config();

const PORT = process.env.PORT;
const BASE_URL = process.env.BASE_URL;

const extractFields = (data, fields) => {
    return data.map(item => {
        const extractedItem = {};
        fields.forEach(field => {
            extractedItem[field] = item[field];
        });
        
        return extractedItem;
    });
};

module.exports = { PORT, BASE_URL, extractFields };