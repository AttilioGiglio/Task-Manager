// elegant mongodb object modeling for node.js
const mongoose = require('mongoose');
// dotenv to use envoriromental variables
require('dotenv').config({path: 'variables.env'});

// configuration NOSQL MONGODB to connect BD with Backend
const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        console.log('DB Conectada');
    } catch(error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDB;