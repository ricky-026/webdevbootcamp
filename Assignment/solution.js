var express = require("express");
var app = express();



app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});


app.get("/speak/:animal", function(req, res){
    
    var message="";
    
    if (req.params.animal == "pig"){
        message = "The pig says 'Oink'";
    }
    else if (req.params.animal == "cow"){
        message = "The cowsays 'Moo'";
    }
    else if (req.params.animal == "dog"){
        message = "The dog says 'Woof Woof!'";
    }
    else 
    {
        message = "....";
    }
    res.send(message);
});

app.get("/speak/:animal", function(req, res){
    
    var message="";
    
    if (req.params.animal == "pig"){
        message = "The pig says 'Oink'";
    }
    else if (req.params.animal == "cow"){
        message = "The cowsays 'Moo'";
    }
    else if (req.params.animal == "Woof Woof!"){
        message = "The dog says 'Woof Woof!'";
    }
    
    res.send(message);
});

app.get("/repeat/:action/:number", function(req, res){
    
    var num = parseInt(req.params.number);
    var message ="";
    for (var i =0 ; i < num; i++){
        message = message + req.params.action + " ";
    }
    
    res.send(message);
});


app.get("*", function(req, res) {
    res.send("Sorry, page not found ... What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP);


