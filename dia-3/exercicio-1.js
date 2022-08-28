/* Site de conteúdo adulto (bebidas, jogos de azar, etc)
Verificar a idade do usuário 
Caso o usuário seja menor de idade, exiba: conteúdo proibido para menores
*/

let nome = "Leonardo"
let idade = 1

if (idade >= 18){
    console.log(`${nome}, você pode entrar na página!`)
}else{
    console.log(`${nome}, o acesso é proibido para menores.`)
}