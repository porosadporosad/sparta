//구조분해할당

// const { name } = require("tar/lib/types");

// let [value1, value2] = [1,"new"];
// console.log("1", value1);
// console.log("2", value2);

let user = {
    name:"abc",
    age:20
}

let {name,age,nj} = user;

console.log("1", name);
console.log("2", age);
console.log("3", nj);