const Proyecto = require('../models/proyecto');
const { validationResult } = require('express-validator');

exports.crearProyecto= async (req, res) => {

    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }

    try {
        // crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);
        // guardar el creador via JWT
        proyecto.creator = req.user.id
        // guardar proyecto
        proyecto.save();
        res.json(proyecto);
    }
    catch(error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

// obtiene todos los proyectos del usuario actual
exports.obtenerProyectos = async(req, res) => {
    try{
        const proyectos = await Proyecto.find({ creator: req.user.id }).sort({creator:-1})
        res.json({proyectos})
    }
    catch(error){
        console.log(error);
        res.status(500).send('Hubo un error')
    }
}

// actualizar un proyecto
exports.obtenerProyectos = async(req, res) => {
// revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
//   extraer la información del proyecto
const { nombre } =req.body;
const nuevoProyecto = {};
if(nombre){
    nuevoProyecto.nombre = nombre;
}
try {
// revisar el ID
// si el proyecto existe o no
// verificar el creador del proyecto
// actualizar 
} catch(error){
    console.log(error);
    res.status(500).send('Error en el servidor');
}
}