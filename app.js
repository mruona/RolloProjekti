var express = require('express');
var bodyParser = require('body-parser')
var db = require('./database');
var app = express();

app.use(function(req, res, next)
{
    console.log(req.method);
    next();
});

// Staattisille tiedostoille public-kansio
app.use('/', express.static('public'));

// Parsii body-osiosta tiedot
app.use(bodyParser());

// Jaden konffaus
app.set('views', './views');
app.set('view engine', 'jade');


// Kirjoittaa käyttäjän tiedot tietokantaan addpersonInfo-funktiolla
app.post('/contact',function(req,res) {
    console.log(req.body);
    db.addPersonInfo(res,req.body);
});

// Hakee kaikki tiedot tietokannasta ReadInfo-funktiolla
app.get('/get_contacts', function(req,res){
    db.ReadInfo(res);
});
app.listen(3000);