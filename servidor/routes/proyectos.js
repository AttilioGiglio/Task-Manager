const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto_controller')

//  Crear proyectos
// api/proyectos
router.post('/',
    proyectoController.crearProyecto
);

module.exports = router;