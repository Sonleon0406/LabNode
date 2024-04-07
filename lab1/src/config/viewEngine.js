const path = require('path');
const express = require('express');
const { create } = require('express-handlebars');
const hbs = create({ extname: '.hbs' });

const configViewEngine = app => {
    app.engine('hbs', hbs.engine);
    app.set('views', path.join('./src', 'views'));
    app.set('view engine', 'hbs');

    app.use(express.static(path.join('./src', 'public')));
};

module.exports = configViewEngine;
