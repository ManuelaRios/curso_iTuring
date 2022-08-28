//Tabuada de um número qualquer 

let numero = 5
let inicio = 1
let fim = 10
console.log(`Tabuada do número ${numero} de ${inicio} até ${fim} `)
while (inicio <= fim){
    console.log(`${numero} x ${inicio} = ${numero * inicio}`)
    inicio ++
}