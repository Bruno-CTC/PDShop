const express = require('express');
const controller = require('../controllers/controller')
const router = express.Router();

router.get('/', controller.home)
router.get('/produtos/', controller.produtos)
router.get('/conta/', controller.conta)
router.get('/carrinho/', controller.carrinho)
router.get('/sobre/', controller.sobre)
router.get('/conta/incluir', controller.renderIncluir)

/*router.get('/incluir', controller.renderIncluir)
router.post('/incluir',controller.incluir)
router.get('/editar/:id', controller.rendereditar)
router.post('/editar/:id', controller.editar)
router.get('/excluir/:id', controller.excluir)*/

module.exports = router

