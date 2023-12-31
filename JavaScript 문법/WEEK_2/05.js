const myMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
myMap.set('three', 3);

// console.log(myMap.keys());
// console.log(myMap.values());
// for(const value of myMap.values()){
//     console.log(value);
// }

// console.log(myMap.entries()); 
for(const entry of myMap.entries()){
    console.log(entry);
}

console.log(myMap.size); // map 의 길이
console.log(myMap.has("two")); // key 기반 검색