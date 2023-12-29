// let fruits = ["사과", "바나나", "오렌지"];

// let number = new Array(5);
// console.log(number);
// console.log(number.length);

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// let fruits = ["사과", "바나나"];
// console.log(fruits);

// fruits.push("오렌지");
// console.log(fruits);

// fruits.pop();
//마지막요소가 사라짐
// console.log(fruits);

// fruits.shift();
// 첫번째요소가 사라짐
// console.log(fruits);

// fruits.unshift("포도");
// // 첫번째 요소에 추가
// console.log(fruits);



// fruits.splice(1, 1, "포도");
// console.log(fruits);


// let fruits = ["사과", "바나나", "키위"];

// let slicedFruits = fruits.slice(1,2);
// console.log(slicedFruits);

let number = [4, 1, 5, 4, 5];

// number.forEach(function(item){
//     console.log("item입니다 => " + item);
// });

// let newNumbers = number.map(function(item){
//     return item * 2;
// });

// console.log(newNumbers);

let filterdNumbers = number.filter(function(item){
    return item !== 5;
});

console.log(filterdNumbers);

// let result = number.find(function(item){
//     return item > 3;
// });
// // 조건에 맞는 첫번째 출력

// console.log(result);