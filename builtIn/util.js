const util = require('util');
const crypto = require('crypto');

/*
    deprecate(func, string): func을 사용하면, 경고메시지 string을 출력한다.
    promisify(callback): callback 패턴을 promise 패턴으로 바꿔준다.
*/

const dontUseMe = util.deprecate((x,y) => {
    console.log(x+y);
}, 'dontUseMe() is deprecated, so DO NOT use it anymore!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);  // util.callbackify()도 있다.
randomBytesPromise(64)
    .then((buf) => {
        console.log(buf.toString('base64'));
    })
    .catch((error) => {
        console.error(error);
    });