var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port     = process.env.PORT || 8080;
var mysql = require('mysql');

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

//require('./leafletembed')(leafletembed);
require('./routes')(app);

app.listen(port, function () {
	console.log("listen to port " + port)
});