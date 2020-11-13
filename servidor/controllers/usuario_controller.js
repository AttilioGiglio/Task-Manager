const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator')

exports.crearUsuario = async (req, res) => {

    const { email, password } = req.body;
    const errores = validationResult(req);
    if( !errores.isEmpty() ){
        return res.status(400).json({ errores:errores.array() });
    }

    try{

        let user = await Usuario.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User exist!' });
        }

        // create new user
        user = new Usuario(req.body);
        
        // Hashing password
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        // save new user
        await user.save();

        // Confirm Message
        res.send('User created correctly!');

    } catch(error) {
        res.status(400).send('Got an Error :(');
    }
}