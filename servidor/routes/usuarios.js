// each module import express
const express = require('express');
// each module backend route import express.router
const router = express.Router();
//  this module has the logic to execute the post on the endpoint
const usuarioController = require('../controllers/usuario_controller');

const { check } = require('express-validator');

// route to create a user
router.post('/',
[
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio y tiene que ser un correo valido').isEmail(),
    check('password', 'La contraseña es obligatorio y debe ser de al menos 6 caracteres').isLength({ min:6 })
],
    usuarioController.crearUsuario
)

module.exports = router;