var mongoose = require("mongoose");

var Tweet = require('./models/tweet');

var tweetData = [
    {
        author:'Nicki Minaj',
        img:'https://pixel.nymag.com/imgs/daily/vulture/2014/09/08/08-nicki.w700.h700.jpg',
        adress:'@nickiminaj',
        date:'10 days',
        content:'Lorizzle ipsum dolor sit amizzle, crunk adipiscing its fo rizzle. That\'s the shizzle sapien hizzle, aliquet volutpizzle, suscipizzle quis, ma nizzle vizzle, pot. Pellentesque eget its fo rizzle.'
    },
    {
        author:'Nicki Minaj',
        img:'https://pixel.nymag.com/imgs/daily/vulture/2014/09/08/08-nicki.w700.h700.jpg',
        adress:'@nickiminaj',
        date:'11 days',
        content:'Sizzle eros. Black izzle dolor dapibus yo tempus tempizzle. Mauris pellentesque nibh its fo rizzle turpizzle. Go to hizzle izzle tortor. '
    },
    {
        author:'Nicki Minaj',
        img:'https://pixel.nymag.com/imgs/daily/vulture/2014/09/08/08-nicki.w700.h700.jpg',
        adress:'@nickiminaj',
        date:'12 days',
        content:'Shizzlin dizzle eleifend rhoncizzle gangster. In boom shackalack izzle platea dictumst. Donec dapibizzle. '
    },
    {
        author:'Nicki Minaj',
        img:'https://pixel.nymag.com/imgs/daily/vulture/2014/09/08/08-nicki.w700.h700.jpg',
        adress:'@nickiminaj',
        date:'14 days',
        content:'Curabitur tellus urna, pretium eu, bizzle fo shizzle, eleifend vitae, nunc. Daahng dawg suscipit. Integizzle sempizzle stuff sizzle i\'m in the shizzle.'
    },
    {
        author:'Nicki Minaj',
        img:'https://pixel.nymag.com/imgs/daily/vulture/2014/09/08/08-nicki.w700.h700.jpg',
        adress:'@nickiminaj',
        date:'15 days',
        content:'Etizzle my shizz mah nizzle ut nisl. Ass quis fo shizzle. Maecenizzle pulvinar, ipsizzle da bomb malesuada gangsta, boom shackalack purus euismod felis.'
    }
]

var seedDB = function () {
    Tweet.deleteMany({},(err) => {
        if(err) {
            console.log('error removing tweets\n',err)
        } else {
            console.log('tweets removing successfull')
            tweetData.forEach(tweet => {
                Tweet.create(tweet,(err,createdTweet) => {
                    if (err) {
                        console.log('error creating tweet\n',err)
                    } else {
                        console.log('created tweet',createdTweet)
                    }
                })
        })
}})}

module.exports = seedDB;