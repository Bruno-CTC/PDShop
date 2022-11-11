const express = require('express');
const controller = require('../controllers/controller')
const router = express.Router();

router.get('/', controller.home)
router.get('/produtos/', controller.produtos)
router.get('/carrinho/', controller.carrinho)
router.get('/sobre/', controller.sobre)

router.get('/conta/', controller.conta)
router.post('/conta/', controller.incluir)

/*router.get('/editar/:id', controller.rendereditar)
router.post('/editar/:id', controller.editar)
router.get('/excluir/:id', controller.excluir)*/

module.exports = router

