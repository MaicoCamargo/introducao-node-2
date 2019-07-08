const Post = require('../models/Post');

module.exports = (app)=> {

    /**
     * carrega o form para add post
     */
    app.get('/', function (request, response) {
        response.render('form-post');
    });

    /**
     * salvar um post no banco
     */
    app.post('/', function (req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function () {
            console.log('cadastrado com sucesso');
            res.redirect('/');
        }).catch(function () {
            res.send('erro no cadastro');
        })
    });

    /**
     * busca no banco os posts e lista eles pelo id e ordem crescente
     */
    app.get('/posts', function (req, res) {

        Post.findAll({order: [['id', 'ASC']]}).then(function (posts) {
            res.render('posts-list', {posts: posts});
        }).catch(function () {
            console.log('erro no listar');
        });
    });

    /**
     * remover um post atreves do seu id
     */
    app.get('/delete/:id', function (req, res) {

        Post.destroy({where:{'id': req.params.id}}).then(function (posts) {
            res.redirect('/posts');
        }).catch(function () {
            console.log('erro no deletar');
        });
    });
};