const express = require('express');
const router = express.Router();

// Model
const patrones = require('../controllers/patron.controller');

router.get('/', patrones.list);

router.post('/registrar', patrones.create);

router.post('/eliminar', patrones.delete);

router.post('/actualizar', patrones.update);

router.get('/info', patrones.getOne);

module.exports = router;