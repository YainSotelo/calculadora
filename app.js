const express = require('express')
const app = express()
const port = 5000
const math = require('mathjs')

app.use(express.json())

app.use('/numero',require('./endpoint/numero'))
app.use('/matriz',require('./endpoint/matriz'))

app.listen(port,()=>{

console.log('escuchando puerto 5000')

})
