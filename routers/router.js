module.exports = function (app) {

    app.get('/', function (request, response) {
        response.render('form-post');
    });

    app.post('/', function (req, res) {

    });

};