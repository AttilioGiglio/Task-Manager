const Tarea = require('../models/tarea');
const Proyecto = require('../models/proyecto');
const { validationResult } = require('express-validator')

// Crea un nueva tarea

exports.crearTarea = async (req, res) => {
    // Revisar si hay errores
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
    }

}