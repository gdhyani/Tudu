const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


var tasklist = [];

// MongoDatabase

// mongoose.connect("mongodb://localhost:27017/Tudu", { useUnifiedTopology: true, useNewUrlParser: true } );
// const taskSchema = new mongoose.Schema({
//     task: String,
// });
// const tasks = mongoose.model("task", taskSchema);



app.get('/', function (req, res){
    res.render("index", {tasklist: tasklist});
});

app.post("/", function(req, res){
    var pushitem = req.body.inputbar;
    tasklist.push(pushitem);

    res.redirect("/");
});






app.listen(process.env.PORT || 3000, function (req, res) {
    console.log("Server Started on Port.")
});