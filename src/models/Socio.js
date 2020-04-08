const mongoose = require('mongoose');

const socioSchema = mongoose.Schema ({
    dniSocio: {
        type: String,
        required: true
    },
    dniPersona: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('socio', socioSchema);