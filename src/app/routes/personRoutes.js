const express = require('express');
const personController = require('../controllers/personController');

const router = express.Router();

router.get('/', personController.getAllPersons);
router.get('/:id', personController.getPersonById);
router.post('/', personController.createPerson);
router.put('/:id', personController.updatePerson);
router.delete('/:id', personController.deletePerson);

module.exports = router;
