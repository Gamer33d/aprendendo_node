const Sequelize = require('sequelize');

//Conexao com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: "mysql"

});

//Exportando as constantes

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}