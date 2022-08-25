//NÚMEROS PRIMOS - divisivel por 1 e por ele mesmo 

let numero = 20
let contador = 1
let total = 0

while (contador <= numero){
    primo = numero % contador == 0

    if(primo){
        total ++
    }

    contador ++ 
}

if (total == 2){
    console.log(`Sim, o número ${numero} é primo!`)
}else{
    console.log(`Não, o número ${numero} não é primo!`)
}
