const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const URL = process.env.URL || "mongodb://localhost:27017/mCart"

//create connection with mongodb
mongoose.connect(URL, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', function() {
    console.log("connected")
})
module.exports = mongoose