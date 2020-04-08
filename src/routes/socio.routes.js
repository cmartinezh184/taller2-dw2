const express = require('express');
const router = express.Router();

// Model
const socios = require('../controllers/socio.controller');

router.get('/', socios.list);

router.post('/registrar', socios.create);

router.post('/eliminar', socios.delete);

router.post('/actualizar', socios.update);

router.get('/info', socios.getOne);

module.exports = router;