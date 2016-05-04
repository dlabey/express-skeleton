'use strict';

var app = require('../../../app');

app.get('/hello-world.json', 'api.hello_world', (req, res, next) => {
    res.json({message: 'Hello World'});
});
