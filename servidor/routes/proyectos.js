const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto_controller');
const authtentication = require('../middleware/authtentication');
const { check } = require('express-validator');
//  Crear proyectos
// api/proyectos
router.post('/',
    authtentication,
    [
        check('nombre', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);

router.get('/',
    authtentication,
    proyectoController.crearProyecto
);

module.exports = router;