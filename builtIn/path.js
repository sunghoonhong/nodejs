const path = require('path');

const string = __filename;

console.log('path.sep:', path.sep);
// 경로의 구분자, Win: \, POSIX(mac, linux): /
console.log('path.delimiter:', path.delimiter);
// 환경변수 구분자. Win: ;, POSIX: :
console.log();
console.log('path.dirname():', path.dirname(string));   // 디렉토리경로
console.log('path.extname():', path.extname(string));   // 확장자
console.log('path.basename():', path.basename(string));
console.log('path.basename():', path.basename(string, path.extname(string)));
// 파일 이름을 보여줌. basename(dir)은 확장자 포함, basename(dir, ext)는 확장자 제외
console.log();
console.log('path.parse():', path.parse(string));
// 파일 경로를 root(루트), dir(디렉토리 경로), base(확장자 포함 파일이름), ext(.확장자), name(확장자 제외 파일이름) 으로 분리.
console.log('path.format():', path.format({
    dir: 'C:\\users\\SEONGHUN',
    name: 'path',
    ext: '.js',
}));
// parse()의 결과값({root, dir, base, ext, name})을 다시 파일경로로 합침.
console.log('path.normalize():', path.normalize('C:\\users////SEONGHUN\\\path.js'));
// 정상적인 경로로 변환
console.log();
console.log('path.isAbsolute():', path.isAbsolute('C:\\'));
console.log('path.isAbsolute():', path.isAbsolute('./home'));
// 절대경로면 true를 반환
console.log();
console.log('path.relative():', path.relative('C:\\users\\SEONGHUN', 'C:\\'));
// relative(기준, 비교): 기준경로에서 비교경로로 가는 상대경로
console.log('path.join():', path.join(__dirname, '..', '..', '/users','.','\SEONGHUN'));
// 여러 인자를 넣으면 한 경로로 합쳐준다. /를 상대경로로 인식한다.
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/SEONGHUN'));
// join과 같지만, /를 절대경로로 인식해서, /이 여러번 나온 경우 마지막에 나온 /경로이외엔 무시한다.