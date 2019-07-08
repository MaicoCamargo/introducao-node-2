const sequelize = require('sequelize');

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: sequelize.STRING
    },
    conteudo: {
        type: sequelize.TEXT
    }
});

Postagem.sync({force: true});
