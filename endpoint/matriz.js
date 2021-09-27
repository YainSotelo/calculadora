const express = require('express')

let router = express.Router()

const math = require('mathjs')


router.post('/suma',(req,res)=>{

let matrizA = req.body.matrizA

let matrizB = req.body.matrizB

let matriz = math.add(matrizA,matrizB)

console.log(matriz)

let mat={

resultado : matriz
}
res.send(mat)

})

router.post('/multiplicar',(req,res)=>{

let matrizA = req.body.matrizA

let matrizB = req.body.matrizB

let multiply = math.dotMultiply(matrizA,matrizB)

console.log(multiply)

let multiplica ={
resultado : multiply
}
res.send(multiplica)

})


router.post('/determinante',(req,res)=>{

let vector = req.body.matrizA

let determinante = math.det(vector)

console.log(determinante)

let determina={
resultado : determinante
}

res.send(determina)
})

module.exports=router