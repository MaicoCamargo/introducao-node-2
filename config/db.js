const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/curso_node', { useNewUrlParser: true }).then(
    () => console.log('conectado com mongo db')).catch(
        (err) => console.log('erro no conectar com mongo db' + err));

module.exports = mongoose;