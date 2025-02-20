// import dependencies
import {serve} from 'bun'

const port = 3000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.json());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// import routes
const paycheck = require('./paycheck');


// console.log("Hello via Bun !!!"); const server = Bun.serve({
//   fetch(req) {
//     return new Response("Buns ");
//   },
// });

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

app.use('/paycheck', paycheck);


// console.log(`Listening on http://localhost:${server.port} ...`);

