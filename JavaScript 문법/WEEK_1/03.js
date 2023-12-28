let str = "Hello World!";
// console.log(str);
// console.log(typeof str);
console.log(str.length);

let str1 = "Hello, ";
let str2 = "World!";
let result = str1.concat(str2);
//문자결합하기
// console.log(result);

// 문자열 자르기
let str3 = "Hello, World!";
console.log(str3.substr(7, 5));
// 시작위치부터 몇개까지 
console.log(str3.slice(7,12));
// 시작위치부터 끝위치 까지

// 문자열 검색
let str4 = "Hello, World!";
console.log(str4.search("World"));

// 문자열 대체
let str5 = "Hello, World!";
let result01 = str5.replace("World", "JavaScript");
console.log(result01);

// 문자열 분할
let str6 = "apple, banana, kiwi";
let result02 = str6.split(",");
console.log(result02);