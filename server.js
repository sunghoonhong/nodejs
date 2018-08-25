const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') => 
    cookie.split(';')
    .map(v => v.split('='))
    .map(([k, ... vs]) => [k, vs.join('=')])
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

const server = http.createServer((req, res) => {
    const cookies = parseCookies(req.headers.cookie);
    
    if(req.url.startsWith('/login')) {
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);
        res.writeHead(302, {
            Location: '/',
            'Set-Cookie': `name=${encodeURIComponent(name)};\
            Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    }
    else if(cookies.name) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`Hello ${cookies.name}!`);
    }
    else {
        fs.readFile('./base.html', (err, data) => {
            if(err) {
                throw err;
            }
            res.end(data);
        });
    }
});
server.listen(8080);
server.on('listening', () => {
    console.log('waiting on 8080 port...');
});
server.on('error', (err) => {
    console.log(err);
});