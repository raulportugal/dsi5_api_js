const express = require('express');
const sequelize = require('./app/db/sequelize');
const Person = require('./app/models/person');
const Category = require('./app/models/category');
const cors = require('cors');
const personRoutes = require('./app/routes/personRoutes');

const app = express();

// Sincronizar los modelos con la base de datos
sequelize.sync({ force: false }) // force: true elimina las tablas existentes y las vuelve a crear (útil en desarrollo)
  .then(() => {
    console.log('Tablas sincronizadas con la base de datos.');
  })
  .catch((error) => {
    console.error('Error sincronizando las tablas:', error);
  });


//configurando las endpoints
app.use(cors());
app.use(express.json());

app.use('/api/v1/personas', personRoutes);

// Ruta principal
app.get('/', (_req, res) => {
  res.send('Servidor Corriendo!!!');
});

module.exports = app;