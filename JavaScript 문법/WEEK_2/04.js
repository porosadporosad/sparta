function mul(num){
    return function(x){
        return x * num;
    }
}

function add(x,y){
    return x + y;
}

const mul2 = mul(2);
const mul3 = mul(3);

console.log(mul2(10));
console.log(mul3(10));

