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

    // Extraer el proyecto y comprobar si existe
    try {
        const  { proyecto } = req.body;
        const existeProyecto = await Proyecto.findById(proyecto);
        if(!existeProyecto) {
            return res.status(404).json({msg: 'Proyecto no encontrado'})
        }
        // Revisar si el proyecto actual pertenece al usuario autenticado
        if (existeProyecto.creator.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'No Autorizado' });
        }
        // Creamos la tarea
        const tarea = new Tarea(req.body);
        await tarea.save();
        res.json({ tarea });
    } catch(error) {

    }

}