import {serve} from 'bun'

// import express backend
const express = require('express');
const app = express();

// import routes
const getPaycheck = require('/routes/paycheck.js')

app.use(express.json());


console.log("Hello via Bun!"); const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

