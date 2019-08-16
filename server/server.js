const express = require('express');

const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
// se coloca como module.exports para poder utilizar io en socket.js
module.exports.io = socketIO(server);
require('./sockets/socket');

//los "on" son para escuchar y los "emit" son para enviar



server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});