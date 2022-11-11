const bd = require('../database/db.js')
const user = require('../models/user')
const path = require('path');

const users = bd.Mongoose.model('esquemaUsers', user.UserSchema, 'users');

exports.home = ('/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/index.html'));
    /*await users.find({}).lean().exec(function (e, listaRegistros) {
        res.json(listaRegistros);
        res.end();
    })*/
})
exports.produtos = ('/produtos/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/produtos.html'));
})
exports.conta = ('/conta/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/conta.html'));
})
exports.carrinho = ('/carrinho/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/carrinho.html'));
})
exports.sobre = ('/sobre/', async(req, res) =>{
    res.sendFile(path.join(__dirname, '../html/sobre.html'));
})
exports.renderIncluir = ('/conta/', async(req, res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let password2 = req.body.password2
    if(password.innerHTML == password2.innerHTML){
        let usuario = new Users({username,email,password})
        try{
            await usuario.save()
            res.redirect('/')
        }
            catch(err){
            next(err)
        }
    }
    else{
        alert("Senha não confirmada")
    }
   
})