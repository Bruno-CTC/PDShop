const bd = require('../database/db.js')
const user = require('../models/user')
const path = require('path');
const { Console } = require('console');
const push = require( 'pushsafer-notifications' );

const users = bd.Mongoose.model('esquemaUsers', user.UserSchema, 'users');

exports.home = ('/', async(req, res) =>{
    //res.sendFile(path.join(__dirname, '../html/index.html'));
    await users.find({}).lean().exec(function (e, listaRegistros) {
        res.json(listaRegistros);
        res.end();
    })
})
exports.produtos = ('/produtos/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../html/produtos.html'));
})
exports.conta = ('/conta/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../html/conta.html'));
})
exports.carrinho = ('/carrinho/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../html/carrinho.html'));
})
exports.sobre = ('/sobre/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../html/sobre.html'));
})
exports.incluir = ('/conta/', async(req, res) => {
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password
    let password2 = req.body.password2
    if(password == password2){
        let usuario = new users({username,email,password})
        try{
            await usuario.save()
            res.redirect('/')
        }
            catch(err){
            next(err)
        }
    }
    else{
        
    }
})