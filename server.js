const http = require('http');
const normalizePort = require('normalize-port');
const app = require('./app');

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = server;
