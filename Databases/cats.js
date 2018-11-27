var mongoose = require("mongoose");
//we need to connect to a database 
mongoose.connect("mongodb://localhost/cat_app"); //connects to cat_app db, if doesnt exit just create a new one 
//create a schema
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});
//create a model from schema
var Cat = mongoose.model("Cat", catSchema); //creating a collection by pluralizing cat


//adding a new cat to a databaase
// var george = new Cat({
//     name: "George",
//     age: 11,
//     temperament: "Grouchy"
// });

// // george.save(function(err,cat){
// //     if (err){
// //         console.log("Something went wrong");
        
// //     }
// //     else {
// //         console.log("WE JUST SAVED A CAT TO THE DB:");
// //         console.log(cat); //cat is whats sent back from the db
// //     }
// // });


//another way to create()
Cat.create({
   name: "SNOW WHITE",
   age : 15,
   temperament : "Bland"
   
}, function(err, cat){
    if(err){
        console.log(err);
    }
    else {
        console.log(cat);
    }
});
//retrieve all cats from the db
Cat.find({}, function(err, cats){
    if (err){
        console.log("OH NO, ERROR!");
        console.log(err);
    }
    else {
        console.log("ALL THE CATS>>>");
        console.log(cats);
    }
});