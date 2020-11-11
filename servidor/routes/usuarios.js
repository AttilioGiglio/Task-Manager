// each module import express
const express = require('express');
// each module backend route import express.router
const router = express.Router();

const usuario_controller = require('../controllers/usuario_controller');

// route to create a user
router.post('/', () => {
    usuario_controller.create_usuario
});

module.exports = router;