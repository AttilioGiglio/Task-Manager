const Usuario = require('../models/usuario')

exports.crearUsuario = async (req, res) => {

    const { email, password } = req.body;

    try{

        let user = await Usuario.findOne({ email });

        if(user) {
            return res.status(400).json({ msg: 'User exist!' });
        }

        // create new user
        user = new Usuario(req.body);
        
        // save new user
        await user.save();

        // Confirm Message
        res.send('User created correctly!');

    } catch(error) {
        res.status(400).send('Got an Error :(');
    }
}