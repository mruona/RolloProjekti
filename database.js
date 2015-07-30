var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/person_info', function(err, succ) {
    
    if(err) {
        console.log("Connection to:" + err + "failed");
    }
    else 
    {
        console.log("Connected to Mongo database");
    }
    
});

// Datalle Schema
var personInfo = mongoose.Schema({
    user_name: String,
    address: String,
    email: String
});

// Rekisteröidään Schema mongooseen
var PersonInfoModel = mongoose.model('PersonalInfo',personInfo);

// Tämä funktio tallentaa käyttäjän tiedon tietokantaan
exports.addPersonInfo = function(res,data){
    var temp = new PersonInfoModel();
    temp.user_name = data.user_name;
    temp.address = data.address;
    temp.email = data.email;
    
    temp.save();
    res.send("Your information " + data + "was saved in database");
}

// Tämä hakee kaikki tiedot ja tulostaa ne
exports.ReadInfo = function(res) {
	PersonInfoModel.find(function (err,personInfo) 
    {
	if(err) {res.send("Something went wrong");}
	else {
            //res.send(personInfo);
            var temp = {
            otsikko: "Osoitekirja",
            henkilot:personInfo
            }
            res.render('index',temp);
         }
	});
};