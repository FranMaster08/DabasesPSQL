const express = require('express')
const path = require('path');
const app = express()

app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())

//agregamos las rutas
app.use('/pesonas',require('./router/personas.routes'))

module.exports=app