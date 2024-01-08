class Car{
    constructor(modeName,modeYear,type,price){
        this.modeName = modeName;
        this.modeYear = modeYear;
        this.type = type;
        this.price = price;
    }
    makeNoise(){
        console.log(this.modeName + " : 빵!");
    }
}

const car1 = new Car("Sorento", "2023","e", 5000);
car1.makeNoise();