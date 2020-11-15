const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/tarea_controller');
const auth = require('../middleware/authtentication');
const { check } = require('express-validator');

// crear una tarea
// api/tareas
router.post('/',
    auth,
    [
        check('name', 'El nombre de la tarea es obligatorio').not().isEmpty()
    ],
    tareaController.crearTarea
)

module.exports = router;