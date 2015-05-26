/// <reference path="../DefinitelyTyped/express/express.d.ts" />

import express = require('express')

var port = process.env.PORT || 5000;

var app = express();
app.engine('jade', require('jade').__express)

app.set('views', __dirname + '/../views/')
app.set('view engine', 'jade');

var router = express.Router();

router.use((req, res, next) => { next(); })
router.route('/users')
    .get((req, res, next) => {
        res.send(req.query['token']);
    });

app.use((req, res, next) => {
    // hacky trick, router is just a handler
    router(req, res, next);
});

app.get('/', function(req, res) {
	res.render('game');
});

app.use(router);
app.use(express.static(__dirname + '/../public/'));
app.listen(port)
