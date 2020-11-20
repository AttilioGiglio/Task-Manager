const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto_controller');
const authtentication = require('../middleware/authtentication');

//  Crear proyectos
// api/proyectos
router.post('/',
    authtentication,
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
    proyectoController.actualizarProyecto
);

router.delete('/:id',
    authtentication,
    proyectoController.eliminarProyecto
);

module.exports = router;