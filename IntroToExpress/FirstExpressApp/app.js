var express = require ("express");
var app = express();


//"/"--> "Hi There!"
//when app makes a get request  to root
app.get("/", function(req, res){
    
    res.send("HI THERE");
});

//"/bye"--> "Goodbye!";
app.get("/bye", function(req, res){
    
    res.send("Goodbye!");
});

//"/dog"--> "meow";
app.get("/dog", function(req, res){
    
    res.send("Meow!");
});

//ROUTING PARAMERS 
app.get("/r/:subReditName", function(req, res) {
    
    var subRedit = req.params.subReditName;
    
    res.send("HELLO WELCOME TO SUB REDDIT " + subRedit);
})

//when you do app.get*., it will catch every route thats not defined 

//*****never put the get * first, THE ORDER OF ROUTES MATTER
//IF ONE OF THE CALLBACK GetS EXECUTED, THEN THE REQUEST WRITTEN IN ORDER WONT EXECUTED
app.get("*", function(req, res) {
    res.send("YOU ARE A STAR!!");
});

app.listen(process.env.PORT, process.env.IP, function (){
    console.log("THE APP HAS STARTED");
}) ;

