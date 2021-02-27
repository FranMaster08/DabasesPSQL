const express = require('express')
const path = require('path');
const nunjucks=require('nunjucks')
const app = express()

app.use(express.static(path.resolve(__dirname, './public')))
app.use(express.json())

//agregamos la configuracion de Nunjucks
app.set('view engine')
nunjucks.configure([path.resolve(__dirname,'./views')],{
    autoescape:false,
    express:app
})


//agregamos las rutas
app.use('/api/personas',require('./router/personas.routes'))
app.use('/nav',require('./router/navegacion.routes'))

module.exports=app