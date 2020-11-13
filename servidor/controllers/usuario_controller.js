const Usuario = require('../models/usuario')

exports.crearUsuario = async (req, res) => {
    try{
        let user;

        // create new user
        user = new Usuario(req.body);
        
        // save new user
        await user.save();

        // Confirm Message
        res.send('Use created correctly');

    } catch(error) {
        res.status(400).send('Got an Error');
    }
}