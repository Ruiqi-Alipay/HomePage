var express = require('express'),
	bodyParser = require('body-parser'),
	cookieParser = require('cookie-parser'),
	path = require('path');

var app = new express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/res', express.static(path.join(__dirname, '..', 'client', 'res')));
app.use('/api', require(path.join(__dirname, 'apis')));
app.use('/', express.static(path.join(__dirname, '..', 'client')));

app.listen(8080, function (err) {
	console.log('Facade server listen on port: ' + 8080);
});