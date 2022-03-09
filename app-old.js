const http = require('http');
const express = require('express');

http.createServer((request, response) => {

        response.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Gerson',
            edad: 24,
            url: request.url
        };
        // response.write('Hoal mundo');
        response.write(JSON.stringify(salida));
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');