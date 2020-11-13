// Main module where everything is execute

// importing express library
const express = require('express');
// importing NOSQL
const conectarDB = require('./config/db');

// Create nodejs server with expressjs
const app = express();

// Activate conection between Backend app and BD
conectarDB();

// Allowed json req and res on JSON.
app.use(express.json({ extended: true }));

// app port. Where the server is on.
const PORT = process.env.PORT || 4000;

// app.get('/', (req,res) => {
//     res.send('Hola Mundo')
// });

// import routes
app.use('/api/usuarios', require('./routes/usuarios'));

// running the backend app
app.listen(PORT, () => {
    console.log(`el servidor esta funcionando en el puerto ${PORT}`)
})