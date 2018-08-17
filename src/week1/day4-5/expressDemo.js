const express = require('express');
const fs = require('fs');
var jsonfile = require('jsonfile');
var file = "C:\\Users\\Mi-PC\\Git Globant Gior\\globant-bootcamps-UI\\src\\week1\\day4-5\\package.json";
const app = express();
const port = 3000;
const err = "FATAL ERROR";
let random = Math.floor(Math.random() * 100)
app.get('/', (req, res) => {
    res.send('Hello There!');
})
app.get('/random', (req, res) => {
    res.send(`${random}`);
})
app.get('/whateveriwant', (req, res) => {
    res.redirect(`https://dgtzuqphqg23d.cloudfront.net/cGcDdLCeyi4v6aLqE6mHp4lfXNGoTl87YP3ADJFraIs-2048x1305.jpg`);
})
app.get('/jsonload', (req, res) => {
    jsonfile.readFile(file, (err, obj) => {
        if (err) throw err;

        res.json(obj);

    });

})
app.listen(port, () => {
    console.log('Example server listening on port ' + port);
    console.log('Enter http://localhost:' + port + ' on your browser')
})

// First things first, this won't work. It's your job to fix it
// Just a clue, that variable called express is a module, so you need to bring it in.
// If only there was some kind of MANAGER for that ;) (make sure you save it though)

// Once the server is working, add a new route, called "/random" that
// sends out a random number between 0 and 100 as a response.

// ******BONUS POINTS*******
// Add 2 other routes, one that does whatever you want, and another one
// that load up a JSON file from the server (if you don't know what that is, Google it)
// and sends the content as a string (little tip, theres a Js method for that)
