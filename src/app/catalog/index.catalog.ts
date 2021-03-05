const http = require('http');

const options = {
     host: 'http://localhost',
     path: '/catalogo',
     method: 'GET',
     port: 3000,
}

const req = http.request(options);
req.end();