// Dado um número qualquer, informe se ele é par ou ímpar

let numero = 10

impar = numero % 2 != 0

if (!impar){
    console.log(`O número ${numero} é par`)
} else{
    console.log(`O número ${numero} é ímpar`)
}