const express = require('express');

const router = express.Router();

router.get('/', (request,response) =>{
    response.send('home');
});

router.get('/posts', (request,response) =>{
    response.send('home');
});

router.get('/categorias', (request,response) =>{
    response.send('home');
});

module.exports = router;