const Sequelize = require('sequelize');


const express = require('express');
const app = express();
const handlebars = require('express-handlebars');

//Config...
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Conexao com o banco de dados mysql
    const sequelize = new Sequelize('test', 'root', 'gui010606', {
        host: "localhost",
        dialect: "mysql"
    
    });

//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')

    });

    app.post('/add', function(req, res){
        res.send('form recebido, fique tranquilo :)')
    })

app.listen(5000, function(){
    console.log('Servidor iniciado endereço: http://localhost:5000');
});

