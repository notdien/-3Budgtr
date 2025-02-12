const express = require('express');
const paycheckRouter = express.Router();

paycheckRouter.post('/paycheck', (req, res) => {
    res.send("Ping'd paycheck route")
})

module.exports = paycheckRouter;