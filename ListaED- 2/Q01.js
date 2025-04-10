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

    tamanho() {
        return this.itens.length;
    }

    frente() {
        return this.itens[0];
    }
}

class PilhaComDuasFilas {
    constructor() {
        this.f1 = new Fila();
        this.f2 = new Fila();
    }

    empilhar(elemento) {
        this.f2.enfileirar(elemento);
        while (!this.f1.estaVazia()) {
        this.f2.enfileirar(this.f1.desenfileirar());
    }

        let temp = this.f1;
        this.f1 = this.f2;
        this.f2 = temp;
    }

    desempilhar() {
        return this.f1.desenfileirar();
    }

    topo() {
        return this.f1.frente();
    }

    estaVazia() {
        return this.f1.estaVazia();
    }
}

const pilha = new PilhaComDuasFilas();
pilha.empilhar(3);
pilha.empilhar(2);
pilha.empilhar(1);
console.log(pilha.desempilhar());
console.log(pilha.desempilhar());
console.log(pilha.desempilhar()); 