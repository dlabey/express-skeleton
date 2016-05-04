'use strict';

var express = require('express');
var handlebars = require('./lib/handlebars');
var readdirRecursive = require('recursive-readdir');
var Router = require('named-routes');

var app = express();

app.engine('html', handlebars.engine);
app.set('view engine', 'html');
app.set('views', __dirname + '/../app/views');
app.use(express.static('public'));

var router = new Router();

router.extendExpress(app);
router.registerAppHelpers(app);

readdirRecursive(__dirname + '/controllers', (err, files) => {
    files.forEach(file => {
        require(file);
    });
});

exports = module.exports = app;
