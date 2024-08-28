const Products = require('../models/products');

// Obtener los datos para los productos
exports.getAllProducts = async (_req, res) => {
  try {
    const products = await Products.findAll();
    res.json(products)
  } catch(eer) {
    res.status(500).json({ error: err.message });
  }
}


// Obtener todas las personas
exports.getAllPersons = async (_req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};