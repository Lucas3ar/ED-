function decimalParaBinario(n) {
    let pilha = [];
    while (n > 0) {
        pilha.push(n % 2);
        n = Math.floor(n / 2);
    }

    let binario = '';
    while (pilha.length > 0) {
        binario += pilha.pop();
    }

    return binario || '0';
}

console.log("Resultado:", decimalParaBinario(5));
