const mongoose = require('mongoose');

const patronSchema = mongoose.Schema({
    dniPatron: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('patron', patronSchema);