const http = require('http');
const fs = require('fs');

const users = {};

http.createServer((req, res) => {
    if(req.method === 'GET') {
        if(req.url === '/') {
            return fs.readFile('./restFront.html', (err, data) => {
                if(err) throw err;
                res.end(data);
            });
        }
        else if(req.url === '/about') {
            return fs.readFile('./about.html', (err, data) => {
                if(err) throw err;
                res.end(data);
            });
        }
        else if(req.url === '/users') {
            return res.end(JSON.stringify(users));
        }
        return fs.readFile(`.${req.url}`, (err, data) => {
            if(err) {
                res.writeHead(404, 'NOT FOUND');
                return res.end('NOT FOUND');
            }
            return res.end(data);
        });
    }
    else if(req.method === 'POST') {
        if(req.url === '/users') {
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('POST Body:', body);
                const {name} = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201);
                res.end('Enroll Success');
                console.log('Success POST');
            });
        }
    }
    else if(req.method === 'PUT') {
        if(req.url.startsWith('/users/')) {
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            return req.on('end', () => {
                console.log('PUT Body:', body);
                users[key] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }
    }
    else if(req.method === 'DELETE') {
        if(req.url.startsWith('/users/')) {
            const key = req.url.split('/')[2];
            delete users[key];
            console.log('Success DELETE');
            return res.end(JSON.stringify(users));
        }
    }
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
})
    .listen(8080, () => {
        console.log('ready on port 8080');
    });