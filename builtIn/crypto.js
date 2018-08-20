const crypto = require('crypto');

/*
    단방향 암호화
    주로 hash
    여기서 hash는 문자열이 입력되면 고정된 길이의 문자열로 변환하는 방식.

    createHash(Algorithm): Algorithm(sha256, sha512 등)을 선택한다.
    update(string): 변환할 string 입력
    digest(encoding algorithm): 
        base64, hex, latin1 등의 인코딩 알고리즘을 넣어주면 결과물을 반환한다.
*/
console.log('base64:', crypto.createHash('sha512').update('password').digest('base64'));
console.log('hex:', crypto.createHash('sha512').update('password').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('another password').digest('base64'));

/*
    pbkdf2라는 알고리즘을 보자.
    기존 문자열에 salt라는 문자열을 분이고 hash를 반복한다.
*/
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbkdf2('password', salt, 100000, 64, 'sha512', (err, key) => {
        // 비밀번호, salt, 반복횟수, 출력바이트, 해시알고리즘
        console.log('password:', key.toString('base64'));
    });
});

/*
    양방향 암호화
    대칭키
    crypto.getCiphers(): 암호화 알고리즘 목록을 반환한다.
    cipher.update(string, input encoding, output encoding)
    cipher.final(output encoding) 암호화를 완료시키기 위함

*/
const cipher = crypto.createCipher('aes-256-cbc', 'key');
let result = cipher.update('secret key', 'utf8', 'base64');
result += cipher.final('base64');
console.log('encrypted:', result);

const decipher = crypto.createDecipher('aes-256-cbc', 'key');
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('decrypted:', result2);