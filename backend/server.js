require('dotenv').config();

const axios = require('axios');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const apiRoutes = require('./routes/api');
const lolApiRoutes = require('./routes/lolapi')
// Middleware to parse JSON bodies
app.use(express.json());


app.use('/api', apiRoutes);
app.use('/lolapi', lolApiRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
