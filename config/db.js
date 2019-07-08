const Sequelize = require('sequelize');
const conexaoDB = new Sequelize('curso_node_yt', 'admin', 'admin', {
    host: '127.0.0.1',
    dialect: 'mysql'
});

module.exports = { conexao: conexaoDB, sequilize: Sequelize };