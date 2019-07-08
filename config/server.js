const express = require('express');
const handleBar = require('express-handlebars');
const rotas = require('../routers/router');
const bodyParser = require('body-parser');
const SERVER_PORT = 8081;

module.exports = function () {

    //express
    const app = express();

    //app engine
    app.engine('handlebars',handleBar({defaultLayout: 'main'}));
    app.set('view engine','handlebars');

    //body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //rotas
    rotas(app);

    //rodar server
    app.listen(SERVER_PORT, function () {
        console.log(' .... '+ SERVER_PORT);
    });
};