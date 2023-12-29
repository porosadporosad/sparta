

// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// let person1 = new Person("홍길동", 30, "남자");
// let person2 = new Person("홍길동", 20, "남자");

// console.log("1",person.name);
// console.log("2",person.age);
// console.log("3",person.gender);

// 객체 메소드(객체가 가진 여러가지 기능 : Object.~)
// Object.key() : key를 가져오는 메소드

let person = {
    name : "홍길동",
    age : 30,
    gender : "남자"
};

// let keys = Object.keys(person);
// console.log("keys => ", keys);

// let values = Object.values(person);
// console.log("values => ", values);

// // entries
// // key와 value를 묶어서 배열로 만든 배열(2차원)
// let entries = Object.entries(person);
// console.log("entries => ", entries);

// assign
// 객체복사
// let newPerson = {};
// Object.assign(newPerson,person, {age:31});
// console.log("newPerson => ", newPerson);

// //객체 비교
// let person1 = {
//     name : "홍길동",
//     age : 30,
//     gender : "남자"
// };

// let person2 = {
//     name : "홍길동",
//     age : 30,
//     gender : "남자"
// };

// console.log(person1 === person2);
// console.log(JSON.stringify(person1) === JSON.stringify(person2));

let person1 = {
    name : "홍길동",
    age : 30
};

let person2 = {
    gender : "남자"
};

// ... : spread operator
let perfectMan = {...person1, ...person2};
console.log(perfectMan);