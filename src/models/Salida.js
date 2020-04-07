const mongoose = require('mongoose');

const salidaSchema = mongoose.Schema({
    matricula: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    dniPatron: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('salida', salidaSchema);