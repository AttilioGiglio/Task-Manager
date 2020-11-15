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
exports.actualizarProyecto = async(req, res) => {
// revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()){
        return res.status(400).json({ errores: errores.array() })
    }
//   extraer la información del proyecto
const { name } =req.body;
const nuevoProyecto = {};
if(name){
    nuevoProyecto.name = name;
}
try {
// revisar el ID
let proyecto = await Proyecto.findById(req.params.id);
// si el proyecto existe o no
if(!proyecto){
    return res.status(404).json({msg:'Proyecto no encontrado'})
}
// verificar el creador del proyecto
if(proyecto.creator.toString() !== req.user.id){
    return res.status(401).json({msg: 'No Autorizado'});
}
// actualizar 
proyecto = await Proyecto.findByIdAndUpdate({_id: req.params.id}, {$set:nuevoProyecto}, {new: true});
res.json({proyecto});
} catch(error){
    console.log(error);
    res.status(500).send('Error en el servidor');
}
}