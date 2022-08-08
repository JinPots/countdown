// setup simple expressjs server 
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3008;

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('*', function (req, res) {
    res.redirect('/');
})

app.listen(port, function () {
    console.log('Server listening on port ' + port);
}).on('error', function (err) {
    console.log(err);
})
