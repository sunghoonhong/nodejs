/*
    version : 설치된 노드의 버전
    arch : 프로세서 아키텍처
    platform : 운영체제 플랫폼
    pid : process id
    uptime() : 프로세스가 시작된 후 흐른 시간(초)
    execPath : 노드의 경로
    cwd() : 현재 프로세스가 실행되는 위치
    cpuUsage() : 현재 cpu 사용량

    env : 시스템 환경변수
        비밀번호처럼 보안적으로 민감함 정보는 
        env.SECRET_KEY 처럼 속성으로 이용한다.

    nextTick(func) : func을 우선으로 처리한다.
        Promise와 nextTick은 microtask Queue로 따로 관리한다.
    exit(code) : code(1:error, else:normal) 프로세스를 종료한다.
*/

setImmediate(() => {
    console.log('immediate');
});
process.nextTick(() => {
    console.log('nextTick');
});
setTimeout(() => {
    console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

let i = 1;
setInterval(() => {
    if(i==5) {
        console.log('exit');
        process.exit();
    }
    console.log(i);
    i++;
}, 1000);
