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
        check('name', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
);
// obtener todos los proyectos
router.get('/',
    authtentication,
    proyectoController.obtenerProyectos
);
// actualizar proyecto
router.put('/:id',
    authtentication,
    [
        check('name', 'El nombre del proyecto es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
);

router.delete('/:id',
    authtentication,
    proyectoController.eliminarProyecto
);

module.exports = router;