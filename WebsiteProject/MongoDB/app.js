const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/art_posts"); //connect and create art database

const app = express();

// Serve static files from the public dir
app.use(express.static("public"));
//app.use(morgan('dev')); //logs HTTP request in the console
app.use(express.urlencoded({ extended: false })); //parses URL-encoded data

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

app.post("/", async(req, res) => {
    const art = new ArtPost({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        pieceName: req.body.pieceName,
        url: req.body.url,
        pieceType: req.body.pieceType,
        descrption: req.body.pieceType
    });

    try {
        const result = await art.save();
        console.log(result);
        res.send("The art piece with url " + result.url + "is inserted");
    } catch (err) {
        console.log(err);
    }
});

app.listen(8080, function() {
    console.log("Server is listening at port 8080");
});