const Persona = require('../models/person');

// Obtener todas las personas
exports.getAllPersons = async (_req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener una persona por ID
exports.getPersonById = async (req, res) => {
  try {
    const persona = await Persona.findByPk(req.params.id);
    if (persona) {
      res.json(persona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear una nueva persona
exports.createPerson = async (req, res) => {
  try {
    const { nombre, nombres, apellidos } = req.body;
    const nuevaPersona = await Persona.create({ nombre, nombres, apellidos });
    res.status(201).json(nuevaPersona);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar una persona existente
exports.updatePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, nombres, apellidos } = req.body;

    const persona = await Persona.findByPk(id);
    if (persona) {
      persona.nombre = nombre;
      persona.nombres = nombres;
      persona.apellidos = apellidos;

      await persona.save();
      res.json(persona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar una persona
exports.deletePerson = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await Persona.findByPk(id);

    if (persona) {
      await persona.destroy();
      res.json({ message: 'Persona eliminada correctamente' });
    } else {
      res.status(404).json({ error: 'Persona no encontrada' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
