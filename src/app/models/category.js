const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Categoria = sequelize.define('Categoria', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  categoria:{
    type: DataTypes.STRING,
    allowNull: false
  }


}, {
  tableName: 'categoria',
  timestamps: false
}
);

module.exports = Categoria;