var express = require("express");
var app = express();
var bodyParser = require("body-parser");

    var friends = ["Ricky", "Austin", "Enoch", "Roger"];
    
//telll express to use body parser 
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.get("/", function(req,res){
    res.render("home");
});

//post sending data to be added, or to be used on server sid 
app.post("/addfriend", function(req, res){
    
    //for a post request, form data are contained in request body
    //res.body is json 
    //convert to js object 
    var newFriend = req.body.newfriend; //now body is parsed to js we used body parser 
    friends.push(newFriend);
    res.redirect("/friends");//to redirect or go to a route from app.js, the routting app
});

app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("SERVER STARTED!!");
});