const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.crearUsuario = async (req, res) => {

    const errores = validationResult(req);

    if( !errores.isEmpty() ){
        return res.status(400).json({ errores:errores.array() });
    }
    const { email, password } = req.body;

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

        // create and sign json web token
        
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            // Message confirmation
            res.json({ token: token });
        }
        )
        
    } catch(error) {
        res.status(400).send('Got an Error :(');
    }
}