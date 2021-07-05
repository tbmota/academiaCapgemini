//chamando o express para o arquivo
const express = require('express')

//chamando a função específica do express que trabalha com rotas
const router = express.Router()

//requisição para o arquivo de rotas o controller referente a produtos
const anunciosController = require('../controllers/anuncios-controller')

//chamando a função específica do controller que irá trabalhar com a rota principal do meu sistema (rota de listagem de anuncios)
router.get('/', anunciosController.listar_anuncios)

module.exports = router;

// router.get('/loginAnuncios', anunciosController.login_anuncios_get)

router.get('/cadastrarAnuncios', anunciosController.cadastrar_anuncios_get)

router.post('/cadastrarAnuncios', anunciosController.cadastrar_anuncios_post)

router.get('/deletarAnuncios/:id', anunciosController.deletar_anuncios)

router.get('/editarAnuncios/:id', anunciosController.editar_anuncios_get)

router.post('/editarAnuncios', anunciosController.editar_anuncios_post)


