const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({message: "Bienvenido al Club de Barcos ULACIT"})
})

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Servidor en el puerto ${port}`));