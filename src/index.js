const express = require('express');
const app = express();
const rote = require('../src/routes/routes')
const path = require('path');
const port = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static(__dirname + '/public'))

app.get('/', rote)
app.get('/produtos/', rote)
app.get('/carrinho/', rote)
app.get('/conta/', rote)
app.get('/sobre/', rote)

app.listen(port, () => {
    console.log("escutando a porta 8080");
})