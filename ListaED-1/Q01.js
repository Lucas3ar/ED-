function inverte(palavra) {
    let pilha = [];
    for (let letra of palavra) {
        pilha.push(letra);
    }

    let invertida = '';
    while (pilha.length > 0) {
        invertida += pilha.pop();
    }

    return invertida;
}

console.log(inverte("ABACAXI"));