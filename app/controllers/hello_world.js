'use strict';

var app = require('../../app');

app.get('/', 'hello_world', (req, res, next) => {
    res.render('hello_world');
});
