var express = require("express");
var app = express();

app.engine('.html', require('ejs').__express);
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("home");
});
app.get("/about", function(req, res){
	res.render("about");
});
app.get("/products", function(req, res){
	res.render("products");
});
app.get("/contact", function(req, res){
	res.render("contact");
});


// app.get("/", function(req, res){
// 	req.sendFile(__dirname + "/home.ejs")
// });

app.listen(process.env.PORT || 4000, function(){
	console.log("hi");
	console.log("server 4000");
});