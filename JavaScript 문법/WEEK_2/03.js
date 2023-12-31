//단축 속성명

// const name = "abc";
// const age = 20;

// const obj = {name,age};
// const obj1 = {
//     name:name,
//     age:age
// }
// key 와 value 가 똑같으면 생략 가능

//전개 구문

// let arr = [1,2,3];
// console.log(arr);
// console.log(...arr);

// let newArr = [...arr,4];
// console.log(newArr);

// 나머지 매개변수 

function ex(a,b,c,...abc){
    console.log(a,b,c);
    console.log(...abc);
}

// ex(1,2,3,4,5,6,7);

//탬플릿 리터럴
const testval = "안녕하세요";
console.log(`Hello World ${testval}`);
console.log(`
    Hello
        My name is ~

        Nice to meet you
`);