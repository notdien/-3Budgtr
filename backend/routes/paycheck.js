const express = require('express');
const app = express();

app.post('/paycheck', (req, res) => {
    res.send("Ping'd paycheck route")
})