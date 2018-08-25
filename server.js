const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.write('<h1>Hello Node!</h1>');
    res.end('<p>Hello Server!</p>');
});
server.listen(8080);
server.on('listening', () => {
    console.log('waiting on 8080 port...');
});
server.on('error', (err) => {
    console.log(err);
});