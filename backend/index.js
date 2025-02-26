const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// import routes
const paycheck = require('./routes/paycheck');

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// home page
app.get('/', (req, res) => {
  res.send('Lol home page');
});

// test route
app.post('/howdy', (req, res) => {
  res.send('Howdy from docker!!! Making sure this works?');
});

// use this /paycheck + parameter to allow use of http req
app.use('/paycheck', paycheck);
