class Fila {
    constructor() {
        this.itens = [];
    }

    enfileirar(item) {
        this.itens.push(item);
    }

    desenfileirar() {
        return this.itens.shift();
    }

    estaVazia() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.join(", ");
    }
}

function inverterFila(fila) {
    if (fila.estaVazia()) return;

    const elemento = fila.desenfileirar();
    inverterFila(fila);
    fila.enfileirar(elemento);
}

const filaOriginal = new Fila();
filaOriginal.enfileirar(1);
filaOriginal.enfileirar(2);
filaOriginal.enfileirar(3);
filaOriginal.enfileirar(4);

console.log("Original:", filaOriginal.imprimir());

inverterFila(filaOriginal);

console.log("Invertida:", filaOriginal.imprimir());
