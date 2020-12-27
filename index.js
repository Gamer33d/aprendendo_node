

const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const BodyParser = require('body-parser');
const Post = require('./modules/Post');

//Config...
    //Template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}));
    app.set('view engine', 'handlebars');

    //Body parser
    app.use(BodyParser.urlencoded({extended: false}));
    app.use(BodyParser.json());

    

//Rotas

    app.get('/', function(req, res){
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
            res.render('home', {posts: posts})//Renderiza a pag home
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')

    });

    app.post('/add', function(req, res){
        Post.create({
            titulo: req.body.titulo,//Define o nome que veio do formulario
            conteudo: req.body.conteudo//Define o conteudo que veio do form
        }).then(function(){
            res.redirect('/')//Redireciona
        }).catch(function(erro){
            res.send('Houve um erro: ' + erro)
        })
    })

    app.get('/deletar/:id', function(req, res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucess")
        }).catch(function (erro) {
            res.send("Essa postagen nao existe")
        })
        
    })

app.listen(5000, function(){
    console.log('Servidor iniciado endereço: http://localhost:5000');
});

