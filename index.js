const Sequelize = require('sequelize');


const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const BodyParser = require('body-parser');

//Config...
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body parser
    app.use(BodyParser.urlencoded({extended: false}));
    app.use(BodyParser.json());

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
        res.send('Texto: ' +req.body.titulo+" conteudo: "+req.body.conteudo)
    })

app.listen(5000, function(){
    console.log('Servidor iniciado endereço: http://localhost:5000');
});

