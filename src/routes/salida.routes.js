const express = require('express');
const router = express.Router();

// Model
const salidas = require('../controllers/salida.controller');

router.get('/', salidas.list);

router.post('/registrar', salidas.create);

router.post('/eliminar', salidas.delete);

router.post('/actualizar', salidas.update);

router.get('/info', salidas.getOne);

module.exports = router;