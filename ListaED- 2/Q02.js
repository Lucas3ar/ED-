class Pilha {
    constructor() {
        this.itens = [];
    }

    empilhar(item) {
        this.itens.push(item);
    }

    desempilhar() {
        return this.itens.pop();
}

    estaVazia() {
        return this.itens.length === 0;
}

    topo() {
        return this.itens[this.itens.length - 1];
    }
}

class FilaComDuasPilhas {
    constructor() {
        this.pilha1 = new Pilha();
        this.pilha2 = new Pilha();
    }

    enfileirar(elemento) {
        this.pilha1.empilhar(elemento);
    }

    desenfileirar() {
        if (this.pilha2.estaVazia()) {
            while (!this.pilha1.estaVazia()) {
                this.pilha2.empilhar(this.pilha1.desempilhar());
            }
        }

        return this.pilha2.estaVazia() ? "Fila vazia" : this.pilha2.desempilhar();
    }

    frente() {
        if (this.pilha2.estaVazia()) {
            while (!this.pilha1.estaVazia()) {
                this.pilha2.empilhar(this.pilha1.desempilhar());
            }
        }

        return this.pilha2.estaVazia() ? "Fila vazia" : this.pilha2.topo();
    }

    estaVazia() {
        return this.pilha1.estaVazia() && this.pilha2.estaVazia();
    }
}

const fila = new FilaComDuasPilhas();
fila.enfileirar(1);
fila.enfileirar(2);
fila.enfileirar(3);

console.log(fila.desenfileirar());
console.log(fila.desenfileirar());
console.log(fila.frente());
console.log(fila.desenfileirar());
console.log(fila.desenfileirar());