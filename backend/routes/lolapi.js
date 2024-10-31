require('dotenv').config();

const express = require('express');
const axios = require('axios');
const router = express.Router();

const RIOT_API_KEY = process.env.RIOT_API_KEY;
const BASE_URL = 'https://americas.api.riotgames.com';

app.get('/api/account/:gameName/:tagLine', async (req, res) => {
    const { gameName, tagLine } = req.params;

    const url = `${BASE_URL}/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`;
    try {
        const response = await axios.get(url, {
            headers: {
                'X-Riot-Token': RIOT_API_KEY,
            },
        });

        // Send the response data back to the client
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error.response ? error.response.data : error.message);
        res.status(error.response ? error.response.status : 500).json({
            message: 'Error fetching data from Riot API',
            error: error.response ? error.response.data : error.message,
        });
    }
});

module.exports = router;