const express = require('express');
const ruta = express.Router();
const db=require('../bd/database')
ruta.get('/', (req, res) => {
   res.render('index.html',{persona:'Fran',listado:db})
});

ruta.get('/home', (req, res) => {
    res.render('home.html',{persona:'Fran'})
 });
module.exports = ruta