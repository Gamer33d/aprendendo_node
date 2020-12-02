/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'gui010606', {
    host: "localhost",
    dialect: "mysql"

});
//Definindo o model
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    },

})
const Usuario = sequelize.define('Usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    }

})

/*Inserta dados na tabela
Postagem.create({
    titulo: "Qualquer titulo",
    conteudo: "ahdajdhajskhdasjdh"
})

Usuario.create({
    nome: "Gamer33d",
    sobrenome: "Gamer34d",
    idade: 12,
    email: "blabla@mail.com"
})
*/




//Criando a table
//Usuario.sync({force: true})