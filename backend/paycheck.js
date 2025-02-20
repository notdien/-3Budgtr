const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// set up router
const router = express.Router();

router.post('/hello', (req, res) => {
    res.send("This is 100% going to work")
});


module.exports = router
