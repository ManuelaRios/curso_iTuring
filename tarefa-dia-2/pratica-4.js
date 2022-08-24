let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandália", "valor": 120.00, "internacional": false};

if (produtoA.internacional == true){
    impostoA = produtoA.valor * 1.2;
    console.log(`O produto A é internacional. Foi aplicado um imposto de 20%, portanto o valor final ficou: Camiseta - R$ ${impostoA}`);
}else{
    impostoA = produtoA.valor * 1.12;
    console.log(`O produto A não é internacional. Foi aplicado um imposto de 20%, portanto o valor final ficou: Camiseta - R$ ${impostoA}`);
}

if (produtoB.internacional == true){
    impostoB = produtoB.valor * 1.2;
    console.log(`O produto B é internacional. Foi aplicado um imposto de 20%, portanto o valor final ficou: Perfume - R$ ${impostoB}`);
}else{
    impostoB = produtoB.valor * 1.12;
    console.log(`O produto B não é internacional. Foi aplicado um imposto de 20%, portanto o valor final ficou: Perfume - R$ ${impostoB}`);
}

if (produtoC.internacional == true){
    impostoC = produtoC.valor * 1.2;
    console.log(`O produto C é internacional. Foi aplicado um imposto de 20%, portanto o valor final ficou: Sandália - R$ ${impostoC}`);
}else{
    impostoC = produtoC.valor * 1.12;
    console.log(`O produto C não é internacional. Foi aplicado um imposto de 12%, portanto o valor final ficou: Sandália - R$ ${impostoC}`);
}

