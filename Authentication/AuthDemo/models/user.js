var mongoose = require("mongoose");
var passortLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    age: Number 
});

UserSchema.plugin(passortLocalMongoose);

//use exports to create a model//

module.exports = mongoose.model("User", UserSchema);