const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'

    },
    create: {
        type:Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema)