var mongoose = require("mongoose")

var tweetSchema = new mongoose.Schema({
    author:String,
    img:String,
    adress:String,
    date:String,
    content:String
})

module.exports = mongoose.model('Tweet', tweetSchema);