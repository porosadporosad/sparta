function change(strings) {
    return function change2(n){
        let stringsN = strings.map(item => item[n]);
        let SN = [];
        let stringA = [];
        for(let i = 0;i<strings.length;i++){
            SN[i] = stringsN[i] + strings[i];
        }
        SN = SN.sort();
        for(let i = 0;i<strings.length;i++){
            stringA[i] = SN[i].slice(1);
        }
        return stringA;
    }
}


let strings1 = ["sun", "bed", "car"];
let strings2 = ["abce", "abcd", "cdx"];

let result1 = change(strings1);

console.log(result1(1));

