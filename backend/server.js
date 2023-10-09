// Main entry point for the backend
const express = require('express');
const cors = require('cors');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

app.use(bodyParser.json());

// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
  }));

app.get('/api', (req, res) => {
    //const { fullName, message } = req.body;
    // res.json({
    //     message: 'Hello world from backend',   
    // })
    res.json(savedData);
});
const savedData = {
    fullName: '',
    message: '',
  };

app.post('/api', (req, res) => {
    console.log('Received POST request with data--', req.body);
    const { fullName, message } = req.body;
    //save to db
    //send request back to client
    // res.json({
    //     fullName,
    //     message,
    // });
    savedData.fullName = fullName;
    savedData.message = message;
    res.json(savedData);
});
