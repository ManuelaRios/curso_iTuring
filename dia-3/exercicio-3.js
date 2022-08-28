//Dado um valor, informe se ele é do tipo number

let valor = true

let tipoValor = typeof(valor)

if (tipoValor === "number"){
    console.log(`A variável ${valor} é do tipo number`)
} else {
    console.log(`A variável ${valor} é do tipo ${tipoValor}`)
}