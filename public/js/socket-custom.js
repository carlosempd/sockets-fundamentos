var socket = io();

//los "on" son para escuchar y los "emit" son para enviar

// cuando nos conectamos desde el front
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// cuando se pierde la conexion del servidor
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

// enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});



//escuchar informacion que viene desde el servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Info del servidor: ', mensaje);
});