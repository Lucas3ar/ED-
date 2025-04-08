const MAX = 10;
let vetor = new Array(MAX);
let topoA, topoB;

function inicializar() {
    topoA = -1;
    topoB = MAX;
}

function eVaziaA() {
    return topoA === -1;
}

function eVaziaB() {
    return topoB === MAX;
}

function empilhaA(valor) {
    if (topoA + 1 === topoB) {
        console.log("Pilha cheia");
        return;
    }
    vetor[++topoA] = valor;
}

function empilhaB(valor) {
    if (topoB - 1 === topoA) {
        console.log("Pilha cheia");
        return;
    }
    vetor[--topoB] = valor;
}

function desempilhaA() {
    if (eVaziaA()) return null;
    return vetor[topoA--];
}

function desempilhaB() {
    if (eVaziaB()) return null;
    return vetor[topoB++];
}

inicializar();
empilhaA(1);
empilhaA(2);
empilhaB(9);
empilhaB(8);
console.log("A:", desempilhaA());
console.log("B:", desempilhaB());
