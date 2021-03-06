const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log(`master pid: ${process.pid}`);
    for(let i=0; i<numCPUs; i+=1) cluster.fork();
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid} exit`);
        cluster.fork();
    });
}
else {
    http.createServer((req, res) => {
        res.write('<h1>Hello</h1>');
        res.end('<p>cluster</p>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8080);

    console.log(`${process.pid} run`);
}