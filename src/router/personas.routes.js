const express = require('express');
const ruta = express.Router();
ruta.get('/', (req, res) => {
    res.status(200).json({ mensaje: 'personas', data: null });
});
module.exports = ruta