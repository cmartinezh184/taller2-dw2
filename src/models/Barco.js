const mongoose = require('mongoose');

const barcoSchema = mongoose.Schema({
    matricula: {
        type: String,
        required: true
    },
    dniSocio: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    amarre: {
        type: String,
        required: true
    },
    cuota: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('barco', barcoSchema);