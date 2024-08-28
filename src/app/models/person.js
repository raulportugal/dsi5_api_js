const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Persona = sequelize.define('Persona', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING,
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'persona',
  timestamps: false
});

module.exports = Persona;
