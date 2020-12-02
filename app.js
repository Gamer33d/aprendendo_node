const express = require('express');
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html" );
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
});

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog")
});


app.get("/ola/:cargo/:nome/:cor", function(req, res){
    res.send("<h1>Ola "+req.params.nome+"!</h1>"+" <h2>De acordo com os dados, voce e "+req.params.cargo+", Que legal!</h2>"+" <h3>Você gosta de "+req.params.cor+"?</h3>");

});


app.listen(5000, function(){

    console.log('Servidor iniciado endereço: http://localhost:5000');

});

