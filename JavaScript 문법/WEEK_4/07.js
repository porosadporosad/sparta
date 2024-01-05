var addCoffee = function(prevName,name){
    setTimeout(function(){
        coffeeMaker.next(prevName ? prevName + ',' + name : name);
    },500);
}

var coffeeGenerator = function* (){
    var espresso = yield addCoffee("","에스프레소");
    console.log(espresso);
    var americano = yield addCoffee(espresso,"아메리카노");
    console.log(americano);
}

var coffeeMaker = coffeeGenerator();
coffeeMaker.next();