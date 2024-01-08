class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log("안녕하세요");
    }
}

const person1 = new Person("홍길동", 30);

person1.sayhello();