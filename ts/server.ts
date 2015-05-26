/// <reference path="../DefinitelyTyped/express/express.d.ts" />

import express = require('express')

var port = process.env.PORT || 5000;

var app = express();
app.engine('jade', require('jade').__express)

app.set('views', __dirname + '/../views/')
app.set('view engine', 'jade');

app.get('/', function(req, res) {
	res.render('game');
});

app.use(express.static(__dirname + '/../public/'));
app.listen(port)
