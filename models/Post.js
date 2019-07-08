db = require('../config/db');

const Post = db.conexao.define('post', {
    titulo: {
        type: db.sequilize.STRING
    },
    conteudo: {
        type: db.sequilize.TEXT
    }
});
// Post.sync(); --> criar model