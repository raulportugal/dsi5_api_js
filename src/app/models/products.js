const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize');

const Products = sequelize.define('Products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cost:{
    type: DataTypes.DECIMAL(18,2)
  },
  price:{
    type: DataTypes.DECIMAL(18,2)
  },
  stock:{
    type: DataTypes.DECIMAL(18,2)
  }
},{
  tableName:'products',
  timestamps: false
})