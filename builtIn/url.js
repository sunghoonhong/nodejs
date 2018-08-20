const url = require('url');

const URL = url.URL;
const myURL = new URL('http://google.com');
console.log('new URL();', myURL);   // WHATWG 방식의 url 분해
console.log('url.format():', url.format(myURL));
// 분해된 url객체를 실제 url형식으로 재조립해준다.
console.log();
const parsedUrl = url.parse('http://google.com'); // 노드 방식의 url 분해
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl));
// format()은 WHATWG, 노드 방식 모두 사용 가능하다.