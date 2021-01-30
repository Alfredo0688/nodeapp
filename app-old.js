const http = require('http');

http.createServer((req, resp) => {
    resp.writeHead(200, { 'Content-Type': 'application/json' });

    let objeto = {
        nombre: 'Alfredo',
        apellido: 'Nuñez',
        url: req.url
    }

    resp.write(JSON.stringify(objeto));
    resp.end();
})

.listen(8080);

console.log('Escuchando el puerto 8080');