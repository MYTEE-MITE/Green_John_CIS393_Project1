const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/art_posts"); //connect and create art database

const app = express();

// Serve static files from the public dir
app.use(express.static("public"));
//app.use(morgan('dev')); //logs HTTP request in the console
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data

const morgan = require('morgan');
app.use(morgan('dev'));

app.set('view engine', 'ejs');

const artPostSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    middleName: { type: String, required: false },
    lastName: { type: String, required: true },
    pieceName: { type: String, required: true },
    url: { type: String, required: true },
    pieceType: { type: String, required: true },
    description: { type: String, required: true }
});

const ArtPost = mongoose.model("ArtPost", artPostSchema);



app.post("/portfolio", function(req, res) {
    const art = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        pieceName: req.body.pieceName,
        url: req.body.url,
        pieceType: req.body.pieceType,
        description: req.body.description}
    res.render("home",{art:art});
});

app.get("/", function(req, res){
    console.log("f");
    //res.send("default response");
    //res.render('home.ejs');
});

app.listen(8080, function() {
    console.log("Server is listening at port 8080");
});