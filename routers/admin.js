const express = require('express');

const router = express.Router();

//como carregar uma collection do mongo
require('./../models/Categoria'); // carregar categoria
const mongoose = require('mongoose'); // carregar o moongose
const Categoria = mongoose.model('categorias'); // criar referencia da collection


/**
 * carrega a tela inicial do admin
 */
router.get('/', (request,response) =>{
    response.send('home');
});

router.get('/posts', (request,response) =>{
    response.send('home');
});

/**
 * carrega a pag com a lista das categorias
 */
router.get('/categorias', (request,response) =>{
    response.render('admin/categorias-list');
});

/**
 * carrega o form de add categorias
 */
router.get('/categorias/adicionar-categoria', (request,response) =>{
    response.render('admin/form-categoria');
});

/**
 * salva uma nova categoria no banco
 */
router.post('/categorias/adicionar-categoria', (request,response) =>{
    const nova = ({
        nome: request.body.nome,
        slug: request.body.slug,
    });

    new Categoria(nova).save()
        .then( ()=> console.log('sucesso'))
        .catch( (err) => console.log('erro'+ err));
});
module.exports = router;