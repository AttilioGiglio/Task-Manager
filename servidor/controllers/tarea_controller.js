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

// Obtener las tareas
exports.obtenerTarea = async(req,res) => {
    try {
    // como estamos usando params se tiene que usar req.query, en lugar de req.body 
    const { proyecto } = req.query;
    // console.log(req.query)
    const existeProyecto = await Proyecto.findById(proyecto);
    if(!existeProyecto) {
        return res.status(404).json({msg: 'Proyecto no encontrado'})
    }
    // Revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creator.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'No Autorizado' });
    }
    //  Obtener las tareas por projecto
    const tareas = await Tarea.find({ proyecto })
    res.json({ tareas });
}
catch(error) {
    console.log(error);
    res.status(500).send('Hubo un error');
}
}

// Actualizar una tarea
exports.actualizarTarea = async(req,res) => {
    try {
    const  { proyecto, name, state } = req.body;
    // si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id)
    if(!tarea) {
        return res.status(404).json({msg: 'No existe esa tarea'})
    }
    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creator.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'No Autorizado' });
    }
    // crear un obj. con la nueva info
    const nuevaTarea = {};

    if(name){
        nuevaTarea.name = name;
    }
    if(state){
        nuevaTarea.state = state;
    }
    // guardar la tarea 
    tarea = await Tarea.findOneAndUpdate({_id: req.params.id }, nuevaTarea, { new:true });
    res.json({ tarea })
}
catch(error) {
    console.log(error);
    res.status(500).send('Hubo un error');
}
}

// Eliminar una tarea
exports.eliminarTarea = async(req,res) => {
    try {
    const  { proyecto } = req.query;
    // si la tarea existe o no
    let tarea = await Tarea.findById(req.params.id)
    if(!tarea) {
        return res.status(404).json({msg: 'No existe esa tarea'})
    }
    // extraer proyecto
    const existeProyecto = await Proyecto.findById(proyecto);

    // Revisar si el proyecto actual pertenece al usuario autenticado
    if (existeProyecto.creator.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'No Autorizado' });
    }
    // Eliminar
    await Tarea.findOneAndRemove({_id: req.params.id});
    res.json({msg: 'Tarea eliminada'});
}
catch(error) {
    console.log(error);
    res.status(500).send('Hubo un error');
}
}