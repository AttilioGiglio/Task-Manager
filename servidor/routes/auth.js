const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/auth_controller');

router.post('/',
[
    check('email', 'El email es obligatorio y tiene que ser un correo valido').isEmail(),
    check('password', 'La contraseña es obligatorio y debe ser de al menos 6 caracteres').isLength({ min:6 })
],
    authController.autenticarUsuario
)

module.exports = router;