const os = require('os');

/*
    uptime(): 운영체제 부팅 이후 지난 시간(초)

    constants: 에러 코드와 같은 상수 정보
*/

console.log(
    `OS Info......
    os.arch(): ${os.arch()}
    os.platform(): ${os.platform()}
    os.type(): ${os.type()}
    os.uptime(): ${os.uptime()} 
    os.hostname(): ${os.hostname()}
    os.release(): ${os.release()}
    
    Path......
    os.homedir(): ${os.homedir()}
    os.tmpdir(): ${os.tmpdir()}
    
    CPU Info......
    os.cpus(): ${os.cpus()}
    os.cpus().length: ${os.cpus().length}
    
    Memory Info......
    os.freemem(): ${os.freemem()}
    os.totalmem(): ${os.totalmem()}`
);

console.log(os.cpus());

console.log(os.constants);