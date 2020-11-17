const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth_controller');
const auth = require('../middleware/authtentication')

// Iniciar sesión 
// api/auth
router.post('/',
[
    check('email', 'El email es obligatorio y tiene que ser un correo valido').isEmail(),
    check('password', 'La contraseña es obligatorio y debe ser de al menos 6 caracteres').isLength({ min:6 })
],
    authController.autenticarUsuario
)

// obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;