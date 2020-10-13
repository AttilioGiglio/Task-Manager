// rutas para crear usuarios
const express = require('express');
const router = express.Router();
const usuario_controller = require('../controllers/usuario_controller');

// Crea un usuario
// api usuarios
router.post('/', () => {
    usuario_controller.create_usuario
});

module.exports = router;