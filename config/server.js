const express = require('express');
const handleBar = require('express-handlebars');
const rotas = require('../routers/router');
const bodyParser = require('body-parser');
const rotasAdmin = require('../routers/admin');
const path = require('path');

require('./db');

const SERVER_PORT = 8081;

module.exports = () => {

    //express
    const app = express();

    //app engine
    app.engine('handlebars',handleBar({defaultLayout: 'main'}));
    app.set('view engine','handlebars');

    //body parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //rotas
    app.use('/admin', rotasAdmin);
    rotas(app);

    //arquivos staticos - css,icons, imgs
    app.use(express.static(path.join(__dirname,'../static')));
    //rodar server
    app.listen(SERVER_PORT, () => {
        console.log('    -> server rodando '+ SERVER_PORT);
    });
};