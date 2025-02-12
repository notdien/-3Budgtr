// import dependencies
import {serve} from 'bun'
import bodyParser from "body-parser"

const express = require('express');
const app = express();
app.use(express.json());

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// import routes
const paycheckRoute = require(/routes/paycheck)
app.use('/paycheck', paycheckRoute);


console.log("Hello via Bun !!!"); const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun !!!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

