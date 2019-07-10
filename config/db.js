const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/curso_node', { useNewUrlParser: true }).then(
    () => { }).catch(
        (err) => console.log('erro no conectar com mongo db' + err));

module.exports = mongoose;