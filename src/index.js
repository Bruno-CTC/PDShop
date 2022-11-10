const express = require('express');
const app = express();
const rote = require('../src/routes/routes')
const path = require('path');
const port = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('/', rote)

app.get('/produtos/', function(req, res){
    res.sendFile(path.join(__dirname, 'html/produtos.html'));
})
app.get('/conta/', function(req, res){
    res.sendFile(path.join(__dirname, 'html/conta.html'));
})
app.get('/carrinho/', function(req, res){
    res.sendFile(path.join(__dirname, 'html/carrinho.html'));
})
app.get('/sobre/', function(req, res){
    res.sendFile(path.join(__dirname, 'html/sobre.html'));
})

app.listen(port, () => {
    console.log("escutando a porta 8080");
})