const { DataTypes } = require('sequelize');
const db = require('./database');

const Contagem = db.define('Contagem', {
  inicio: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fim: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  passo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  resultado: {
    type: DataTypes.TEXT, // Onde salvaremos a sequência com setas e bandeira [3]
    allowNull: false
  }
});

module.exports = Contagem;