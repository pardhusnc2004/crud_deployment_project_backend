const mongoose = require('mongoose')
const express = require('express');

const bodyparser = require('body-parser')
const cors = require('cors')

const studentRoute = require('./controller/studentRoute');
mongoose.set("strictQuery", true)
mongoose.connect("mongodb+srv://crudtest0:pass0@cluster0.atgmlle.mongodb.net/schooldb")

var app = express();

let db = mongoose.connection

db.on("open", () => {console.log("Connected to db")})
db.on("error", () => {console.log("Failed to connect to db")})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());


app.use("/studentdetails", studentRoute)

app.listen(4000, () => {
    console.log("Server started at port 4000")
})