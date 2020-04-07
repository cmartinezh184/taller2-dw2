const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    dni: {
        type: Number,
        required:true
    },
    nombre: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    dniSocio: {
        type: String,
        required: false
    },
    dniPatron: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('persona', personaSchema);