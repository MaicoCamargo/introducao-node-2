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
    Categoria.find().sort({data:'desc'})
        .then( (categorias) => response.render('admin/categorias-list',{categorias: categorias}))
        .catch( () => {
            request.flash('error_msg','erro no listar as categorias');
            response.render('/categorias');
        });

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

    let erros =[];
    if(!request.body.nome || request.body.nome < 2){
        erros.push({ texto: 'nome invalido, insira um nome valido'})
    }
    if (!request.body.slug || request.body.slug < 2){
        erros.push({texto: 'slug invalido, insira um slug valido'})
    }

    if (erros.length > 0) { response.render('admin/form-categoria', {erros: erros});}

    else {
        const nova = ({
            nome: request.body.nome,
            slug: request.body.slug,
        });

        new Categoria(nova).save()
            .then( ()=> {
                request.flash('success_msg','categoria cadastrada com sucesso');
                response.redirect('/admin/categorias');

            })
            .catch( (err) => {
                request.flash('error_msg','ocorreu um erro no cadastrar categoria, tente novamente');
                response.redirect('/admin/categorias');

            });
    }


});

/**
 * carregar a pagina com form para editar categoria
 */
router.get('/categorias/editar-categoria/:id', (request,response) => {

    Categoria.findOne({_id: request.params.id})
        .then( (resultado) => {
            console.log(resultado.nome);
            console.log(resultado.slug);
            response.render('admin/categoria-edit',{categoria: resultado});
        })
        .catch( () => {

            request.flash('error_msg','está categoria não foi encontrada');
            response.redirect('admin/categorias');
        });


});
module.exports = router;