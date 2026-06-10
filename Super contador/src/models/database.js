const { Sequelize } = require('sequelize');
const path = require('path');

// Cria o banco de dados como um arquivo chamado 'database.sqlite' na pasta src
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database.sqlite')
});

module.exports = sequelize;