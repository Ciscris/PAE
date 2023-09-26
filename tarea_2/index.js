const dotenv = require('dotenv')
dotenv.config();
const express= require('express')
const app= express()
app.use(express.json())

const {engine} = require("express-handlebars")
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './src/views')

const router= require('./src/rutas/news')
app.use('/',router);
app.use('/assets', express.static('public'))

app.listen(process.env.PORT, ()=>{
    console.log('listening on port:' + process.env.PORT);
})