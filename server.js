var express = require('express');
var app = express();
var jsdom = require("jsdom");
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var port     = process.env.PORT || 8080;

var {
	JSDOM
} = jsdom;
var {
	window
} = new JSDOM();
var {
	document
} = (new JSDOM('')).window;
global.document = document;

var $ = require("jquery")(window);

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.engine('.ejs', require('ejs').__express);
app.set('view engine', 'ejs');

app.listen(port, function () {
	console.log("listen to port " + port)
});