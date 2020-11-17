const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuario = async (req, res) => {

    const errores = validationResult(req);

    if( !errores.isEmpty() ){
        return res.status(400).json({ errores:errores.array() });
    }

    const { email, password } = req.body;

    try{
        // check email
        let user = await Usuario.findOne({ email });

        if(!user) {
            return res.status(400).json({ msg: 'User not exit' });
        }
        
        // check password
        const passwordCorrect = await bcryptjs.compare(password, user.password);
        if(!passwordCorrect) {
            return res.status(400).json({ msg: 'Password Incorrect' })
        }

        // data correct
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

exports.autenticarUsuario = async (req, res) => {
    try{
        const usuario = await Usuario.findById(req.user.id);
        res.json({usuario});
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: 'Hubo un error'})
    }