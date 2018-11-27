//use require to import the package

//in this case when we import cat-me
//it stores all that code into var catMe,
//catMe in this case is a function
var catMe  = require('cat-me');
var tellMeJoke = require('knock-knock-jokes');

console.log("FROM APP.JS");

console.log(catMe());

console.log(tellMeJoke());

