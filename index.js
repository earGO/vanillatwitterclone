var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require("mongoose"),
    app = express(),
    port = 3000,

    Tweet = require('./models/tweet')
    seedDB = require('./seeds');

seedDB();

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/vanillatwitterclone', {useNewUrlParser: true})

app.get('/', (req, res) => {
    res.send('got server up and running')
})

app.get('/tweets', (req, res) => {
    Tweet.find({},(err,allTweets) => {
        if (err) {
            console.log('oops!\n',err)
        } else {
            res.render('index',{tweets:tweets})
        }
    })
})

app.listen(port, function () {
    console.log('server up and running on port', port)

})