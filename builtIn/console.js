const string = 'abc';
const number = 1;
const bool = true;
const obj = {
    outside: {
        inside: {
            key: 'value',
        },
    },
};

/*
console.time(label), console.timeEnd(label)
=> print the interval between time() and timeEnd() with same label
*/

console.time('total time');
console.log('normal log. You can log multiple values with using comma')
console.log(string, number, bool);
console.error('You should print error message with error()');

console.dir(obj, {colors: false, depth: 2});
console.dir(obj, {colors: true, depth: 1});

console.time('Check time');

for (let i=0; i<100000; i++) continue;
console.timeEnd('Check time');

function b() { console.trace('trace error position'); }

function a() { b(); }
a();

console.timeEnd('total time');