'use strict';

var exphbs = require('express-handlebars');

var expressHandlebars = exphbs.create({
    defaultLayout: 'main',
    extname: '.html',
    layoutsDir: 'app/views/layouts',
    partialsDir: 'app/views/partials'
});

exports = module.exports = expressHandlebars;
