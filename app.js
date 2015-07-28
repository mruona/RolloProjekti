var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(function(req, res, next)
{
    console.log(req.method);
    next();
});

app.use('/', express.static('public'));

app.use(bodyParser());

app.post('/contact',function(req,res) {
    console.log(req.body);
    res.send("Your data is saved");
});

app.listen(3000);