// from global object

const timeout = setTimeout(() => {
    console.log('after 1.5s');
}, 1500);

const interval = setInterval(() => {
    console.log('every 1.0s');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log(`not be executed`);
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('execute immediately');
});

const immediate2 = setImmediate(() => {
    console.log('not be executed');
});
clearImmediate(immediate2);