const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controller');
const auth = require('../middleware/authtentication')

// Iniciar sesión 
// api/auth
router.post('/',
    authController.autenticarUsuario
)

// obtiene el usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
);

module.exports = router;