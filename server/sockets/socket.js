const { io } = require('../server');


// cuando se conecta alguien al servidor
io.on('connection', (client) => {

    console.log('Usuario conectado');

    //emitir al cliente una vez que se conecta
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    //Cuando se desconecta el usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //Transmite a todos los usuarios
        client.broadcast.emit('enviarMensaje', data);


    });



});