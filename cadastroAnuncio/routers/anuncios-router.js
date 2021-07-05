const express = require('express')

const router = express.Router()

const anunciosController = require('../controllers/anuncios-controller')

router.get('/', anunciosController.listar_anuncios)

module.exports = router;

router.get('/cadastrarAnuncios', anunciosController.cadastrar_anuncios_get)

router.post('/cadastrarAnuncios', anunciosController.cadastrar_anuncios_post)

router.get('/deletarAnuncios/:id', anunciosController.deletar_anuncios)

router.get('/editarAnuncios/:id', anunciosController.editar_anuncios_get)

router.post('/editarAnuncios', anunciosController.editar_anuncios_post)


