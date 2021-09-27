const express = require('express')

let router = express.Router()

const math = require('mathjs')

router.post('/sumar',(req,res)=>{

let vector = req.body.numeros

let suma = math.sum(vector)

console.log(math.sum(vector))

let sumar={    
resultado : suma
}
res.send(sumar)

})

router.post('/multiplicar',(req,res)=>{

let multiply = req.body.numeros

let multiplica = math.prod(multiply)

console.log(math.prod(multiply))

let multiplicar = {

resultado : multiplica
}
res.send(multiplicar)

})

router.post('/resta',(req,res)=>{

let numero1 = req.body.num1

let numero2 = req.body.num2

let resta = math.subtract(numero1,numero2)

console.log(resta)

let restar={
resultado : resta
}

res.send(restar)
})

router.post('/divicion',(req, response) => {

let numero1 = req.body.num1

let numero2 = req.body.num2

let divicion = math.divide(numero1,numero2)

if(numero2 != 0)
{
console.log(divicion)

let diviciones ={
resultado : divicion
}

response.send(diviciones)
}
else
{
response.send('error')
}

})

router.post('/extremos',(req,res)=>{

let vector = req.body.num1

let menor = math.min(vector)

let mayor =math.max(vector)

console.log(menor,mayor)

let MaxMin ={
min : menor,

max : mayor
}

res.send(MaxMin)

})

module.exports=router