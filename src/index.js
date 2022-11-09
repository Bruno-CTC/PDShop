let express = require('express');
let app = express();
let http = require('http');
let fs = require('fs');

app.get("/", function(req, res){
    fs.readFile('src/index.html', function(error, html){
        if(error){
            throw error;
        }
    });
})

app.listen(8080, () => {
    console.log("escutando a porta 8080");
})