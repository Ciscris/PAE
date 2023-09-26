const dotenv = require('dotenv')
dotenv.config();
const express= require('express')

const app= express()
const {engine}= require('express-handlebars')
app.engine('handlebars',engine())
app.set('views engine', 'handlebars')
app.set('views','./views')
app.use('/assets',express.static('public'))
app.use('/',)