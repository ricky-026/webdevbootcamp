var express = require("express");
var mongoose = require("mongoose");
var passport = require("passport");
var bodyParser = require("body-parser");
var User = require("./models/user");
var localStrategy = require("passport-local");
var passportLocalMongoose =require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");

var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(require("express-session")({
    secret: "My name is slim shady",
    resave: false,
    saveUninitialized: false
})); //need to pass in 3 options to work with passport 
//this secret is actually used to encode and decode messages
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));//tell passport to use this the User version of authenticate
passport.serializeUser(User.serializeUser()); //responsible for reading the session and serialize the data
passport.deserializeUser(User.deserializeUser());//responsibe for reading the data from session and uncode it


//===========================
//ROUTES 
//==========================

app.get("/", function(req, res){
    res.render("home");
})

app.get("/secret", isLoggedIn, function(req, res){
    res.send(req.user);
    //res.render("secret");
})


//============================
//AUTH ROUTES 
//===========================
//show sign up 
app.get("/register", function(req, res){
    res.render("register");
});


app.post("/register", function(req, res){
    //res.send("reg");
    req.body.username;
    req.body.password;
    //passing a new User (obj) to register, and p word and a callback
    //you dont want to store password in database 
    //you need to hash the p words and store it
    User.register(new User({username: req.body.username, age: 12}), req.body.password , function(err, user){
        if (err){
            console.log(err);
            return res.render('register'); //cuts the circuit short
        }
        
        //run this,  log the user in, take care of session, run serialized user method 
        //use local strategy 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
})

//before accessing certain pages 
//we need to check if user is logged in
//next function to call, express will take care of it
function isLoggedIn(req, res, next)
{
    if(req.isAuthenticated()){
        return next();
    }
    
    res.redirect("/login");
}

//LOGIN ROUTES
//this is known as the middleware
//some codes runs before our final call back runs 
//passort authenticate will take the params and check with database

app.get("/login", function(req,res){
   res.render("login"); 
});

app.post("/login", passport.authenticate("local",
{
    successRedirect: "/secret",
    failureRedirect: "/login"
}),function(req, res){
    
});


app.get("/logout", function(req, res){
    req.logout(); //use passport to destroy the session
    res.redirect("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started");
});