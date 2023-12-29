// for(let i =0; i < 10; i++){
//     console.log(i);
// }

// for(let i = 0; i <=10; i++){
//     if(i>=2){
//         if(i % 2 === 0){
//             console.log(i);
//         }
//     }
// }

let person = {
    name : "John",
    age : 30,
    gender : "male"
};

for(let key in person){
    console.log(key + ": " + person[key]);
}
