var http = require('http');

// create a server object
http.createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
}).listen(8080);

