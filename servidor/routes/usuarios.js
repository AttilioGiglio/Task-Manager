// each module import express
const express = require('express');
// each module backend route import express.router
const router = express.Router();

const usuarioController = require('../controllers/usuario_controller');

// route to create a user
router.post('/',
    usuarioController.crearUsuario
)
// router.get('/api/usuarios', (req, res) => {
//     res.json({
//         status:'API WORLD'
//     })
// });

module.exports = router;