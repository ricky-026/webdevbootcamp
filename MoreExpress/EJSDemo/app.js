var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.render("home.ejs"); 
   //find this ejs fine from views 
   //views is not a arbitrary directory 
   //res.send("<h1>Welcome to the home page!</h1> <h2>blah blah</h2>");
});

app.get("/fallinlovewith/:thing", function(req, res){
   var thing = req.params.thing;
   res.render("love.ejs", {thingVar : thing}); //you can pass a js object
});


app.get("/posts", function(req, res){
   var posts = [{title: "Post 1", author: "Susy"},
                {title: "My adorable pet bunny", author: "Charlie"},
                {title: "Can you believe this pomsky?", author:"Colt"}
                ];
   
   res.render("posts.ejs", {posts: posts});
   
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!!");
});

//you needto npm install ejs 
//important
//communication between files 