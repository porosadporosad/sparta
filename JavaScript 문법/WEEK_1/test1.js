function solution(s){
    s = s.toUpperCase();

    let p1 = s.split('P').length - 1;
    let y1 = s.split('Y').length - 1;

    let abc = /^[a-z|A-Z]+$/;

    if(p1 === y1 && s.length <= 50 && abc.test(s)){
        console.log(true);
    } else {
        console.log(false);
    }
}

solution("pPoooyY");
solution("Pyy");
solution("Pyypㅇ");
