const express = require('express');
const router = express.Router();

// Model
const personas = require('../controllers/persona.controller');

router.get('/', personas.list);

router.post('/registrar', personas.create);

router.post('/eliminar', personas.delete);

router.post('/actualizar', personas.update);

router.get('/info', persona.getOne);

module.exports = router;