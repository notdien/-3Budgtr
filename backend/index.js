import {serve} from 'bun'
// import express backend
import express from "express"

console.log("Hello via Bun!"); const server = Bun.serve({
  port: 3000,
  fetch(req) {
    return new Response("Bun!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);

// serve({
//   fetch(request) {
//     const url = new URL(request.url);
//     if (url.pathname === '/') {
//       return new Response(JSON.stringify({"Status": "OK"}), {
//         headers: {'context-type': 'application/json'}
//       });
//     } else {
//       return new Response('Not found', {status: 404});
//     }
//   },
//   port: 3000,
// })
// console.log (`Server is running...`);