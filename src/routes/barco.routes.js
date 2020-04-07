const express = require('express');
const router = express.Router();

// Model
const barcos = require('../controllers/barco.controller');

router.get('/', barcos.list);

router.post('/registrar', barcos.create);

router.post('/eliminar', barcos.delete);

router.post('/actualizar', barcos.update);

router.get('/info', barcos.getOne);

module.exports = router;