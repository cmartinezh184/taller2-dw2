const mongoose = require('mongoose');

const patronSchema = mongoose.Schema({
    dniPersona: {
        type: String,
        required: true
    },
    dniPatron: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('patron', patronSchema);