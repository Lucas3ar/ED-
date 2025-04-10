class Deque {
    constructor() {
        this.itens = [];
    }

    inserirInicio(elemento) {
        this.itens.unshift(elemento);
    }

    removerInicio() {
        if (this.estaVazio()) return "Deque vazio";
        return this.itens.shift();
    }

    inserirFim(elemento) {
        this.itens.push(elemento);
    }

    removerFim() {
        if (this.estaVazio()) return "Deque vazio";
        return this.itens.pop();
    }

    estaVazio() {
        return this.itens.length === 0;
    }

    imprimir() {
        return this.itens.join(", ");
    }
}

const deque = new Deque();

deque.inserirFim("A");
deque.inserirFim("B");

deque.inserirInicio("C");
deque.inserirInicio("D");

console.log(deque.imprimir());

console.log(deque.removerInicio()); 

console.log(deque.removerFim());

console.log(deque.imprimir());
