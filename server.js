// start server
const http = require("http")
const connect = require('connect')
const serveStatic = require('serve-static')
const name = 'ArtsBeacon'

console.info('booting %s', name)

// for testing
const SERVER_PORT = 5002

// Set up Connect routing
var app = connect()
    .use(serveStatic(__dirname))

// Start node server listening on specified port -----
http.createServer(app).listen(SERVER_PORT);
console.info('HTTP server listening on port %s', SERVER_PORT);
