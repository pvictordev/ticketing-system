// Main entry point for the backend
const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

app.use(bodyParser.json());

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello from server!',
    });
});
