const mongoose = require('mongoose');

//conectando no mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/curso_node', {useNewUrlParser: true}).then(() => {
    console.log('conectado com o mongo ');
}).catch((err) => {
    console.log('erro' + err);
});

//exemplo criando collection
const UserSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String
    }
});

//vinculando/salvando collection com o mongo
mongoose.model('usuarios', UserSchema);

//cria um registro no mongo
const Ana = mongoose.model('usuarios');

new Ana({
    nome: 'Ana',
    sobrenome: 'tiva'
}).save().then(() => console.log('salvo com sucesso')).catch((err) => console.log('erro' + err));

