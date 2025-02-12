const express = require('express');
const app = express();

const body_parser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

const setupHello = (app) => {
    app.post('/hello', (req, res) => {
        res.send('hi');
    });
};


module.exports = setupHello
