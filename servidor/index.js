const express = require('express');

// crear el servidor

const app = express();

// puerto de la app
const PORT = process.env.PORT || 4000;

app.get('/', (req,res) => {
    res.send('Hola Mundo')
})

// arrancar la app
app.listen(PORT, () => {
    console.log(`el servidor esta funcionando en el puerto ${PORT}`)
})