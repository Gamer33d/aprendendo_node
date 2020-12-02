const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'gui010606', {
    host: "localhost",
    dialect: "mysql"

});
