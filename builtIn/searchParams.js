const {URL} = require('url');
const myURL = new URL('http://www.google.co.kr/?category=node&limit=10&limit=9')

let sp = myURL.searchParams;

console.log('searchParams', sp);
console.log('searchParams.getAll():', sp.getAll('limit'));
console.log('searchParams.get():', sp.get('search'));
console.log('searchParams.has():', sp.has('name'));

console.log('searchParams.keys():', sp.keys());
console.log('searchParams.values():', sp.values());

sp.append('filter', 'es3');
sp.append('filter', 'es5');
console.log(sp.getAll('filter'));

sp.set('filter', 'es6');    // 추가하는게 아니라 덮어쓴다.
console.log(sp.getAll('filter'));

sp.delete('filter');
console.log(sp.getAll('filter'));

console.log('searchParams.toString():', sp.toString());
myURL.search = sp.toString();
