

//import faker first 
var faker = require('faker');
var util = require("util");

var listProd = genProd();
var listPrice = genPrice();

console.log("============================");
console.log("     WELCOME TO MYSHOP");
console.log("============================");

for (var c = 0; c < listProd.length; c ++){
   console.log(util.format('%s - $%s', listProd[c], listPrice[c].toString()))
}


for (var c = 0; c < listPrice.length; c ++){
    console.log(util.format('%s - $%s', faker.commerce.productName(), faker.commerce.price()));
}

function genProd() {
    var prods = [];
    
    for (var i = 0; i < 10; i ++ ){
        prods.push(faker.commerce.productName());
    }
    
    return  prods;
}


function genPrice(){
    var prices = [];
    
    for (var i = 0 ; i < 10; i ++){
        prices.push(faker.commerce.price());
    }
    
    return prices;
}
