const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const math = require('mathjs')

app.use(express.json())

app.use('/numero',require('./endpoint/numero'))
app.use('/matriz',require('./endpoint/matriz'))

app.listen(port,()=>{

console.log(`àpp running on ${port}`)

})
