// let x = 10;

// if(x > 0) {
//     console.log("x는 양수입니다");
// }

// let y = "Hello World";

// if(y.length >= 5) {
//     console.log(y.length);
// }

// let x = -1;

// if(x > 0){
//     console.log("x는 양수입니다");
// } else {
//     console.log("x는 음수입니다");
// }

//switch
//변수의 값에 따라, 여러 개의 경우(case) 중 하나를 선택
//default

let fruit = "도넛";
switch (fruit) {
    case "사과":
        console.log("사과입니다.");
        break;
    case "바나나":
        console.log("바나나입니다.");
        break;
    case "키위":
        console.log("키위입니다.");
        break;
    default:
        console.log("아무것도 아닙니다.");
        break;
}