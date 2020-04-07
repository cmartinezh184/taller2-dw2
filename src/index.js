const express = require('express');
const bodyParser = require('body-parser');
const InitiateMongoServer = require('./config/db');

// Routes
const personas = require('./routes/persona.routes');
const barcos = require('./routes/barco.routes');
const salidas = require('./routes/salida.routes');

const app = express();

// Middleware
app.use(bodyParser.json());

InitiateMongoServer();

app.get('/', (req, res) => {
    res.json({message: "Bienvenido al Club de Barcos ULACIT"})
})

// Routing
app.use('/personas', personas);
app.use('/barcos', barcos);
app.use('/salidas', barcos);

// Port
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));