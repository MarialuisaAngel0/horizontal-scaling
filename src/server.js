const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
    console.log('Yo estoy respondiendo desde el servidor');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hola, estoy respondiendo desde: ${os.hostname()}!\n`);
});

server.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
