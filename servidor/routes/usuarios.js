// each module import express
const express = require('express');
// each module backend route import express.router
const router = express.Router();
//  this module has the logic to execute the post on the endpoint
const usuarioController = require('../controllers/usuario_controller');

const { check } = require(' express-validator ');

// route to create a user
router.post('/',
[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('nombre', 'El nombre es obligatorio').isEmail(),
    check('nombre', 'El nombre es obligatorio').islength({ min:6 })
],
    usuarioController.crearUsuario
)
// router.get('/api/usuarios', (req, res) => {
//     res.json({
//         status:'API WORLD'
//     })
// });

module.exports = router;