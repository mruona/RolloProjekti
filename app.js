var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello Worldi, joop')
});

app.listen(3000);