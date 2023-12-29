function solution(absolutes, signs) {
    if (absolutes.length > 1000) {
        console.log("No!");
        return;
    }
    
    let num = 0;
    for (let i = 0; i < absolutes.length; i++) {
        if (signs[i] === true) {
            num += absolutes[i];
        } else {
            num -= absolutes[i];
        }
    }
    console.log(num);
}

let a = [4, 7, 12];
let b = [true, false, true];

solution(a, b);