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

function intercalarFilas(f1, f2) {
    const resultado = new Fila();

    while (!f1.estaVazia() || !f2.estaVazia()) {
        if (!f1.estaVazia()) {
            resultado.enfileirar(f1.desenfileirar());
        } 
        if (!f2.estaVazia()) {
            resultado.enfileirar(f2.desenfileirar());
        }
    }

    return resultado;
}

const fila1 = new Fila();
const fila2 = new Fila();

fila1.enfileirar("A");
fila1.enfileirar("B");
fila1.enfileirar("C");

fila2.enfileirar(1);
fila2.enfileirar(2);
fila2.enfileirar(3);

const filaIntercalada = intercalarFilas(fila1, fila2);
console.log(filaIntercalada.imprimir()); 
