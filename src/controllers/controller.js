const bd = require('../database/db.js')
const user = require('../models/user')
const path = require('path');

const users = bd.Mongoose.model('esquemaUsers', user.UserSchema, 'users');

exports.home = ('/', async(req, res) =>{
25
25
    res.sendFile(path.join(__dirname, '../html/index.html'));
})
exports.produtos = ('/produtos/', async(req, res) =>{
25
25
    res.sendFile(path.join(__dirname, '../html/produtos.html'));
})
exports.conta = ('/conta/', async(req, res) =>{
25
25
    res.sendFile(path.join(__dirname, '../html/conta.html'));
})
exports.carrinho = ('/carrinho/', async(req, res) =>{
25
25
    res.sendFile(path.join(__dirname, '../html/carrinho.html'));
})
exports.sobre = ('/sobre/', async(req, res) =>{
25
25
    res.sendFile(path.join(__dirname, '../html/sobre.html'));
})