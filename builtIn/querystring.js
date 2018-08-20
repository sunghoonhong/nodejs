/*
    노드 방식의 url의 search 부분을 객체로 만드는 모듈
    WHATWG와 노드의 url 방식은 개인 취향이지만
    url에 host가 없이 pathname만 오는 경우(/bbs/list.php) 노드의 방식만 유효하다.
*/

const url = require('url');
const qs = require('querystring');

const parsedUrl = url.parse('http://www.google.com/?page=3&limit=10&category=node&category=js');
const query = qs.parse(parsedUrl.query);
console.log('querystring.parse():', query); // query를 객체로
console.log('querystring.stringify():', qs.stringify(query));