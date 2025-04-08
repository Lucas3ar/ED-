class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = [[]];
    }

    empilha(x) {
        let ultima = this.pilhas[this.pilhas.length - 1];
        if (ultima.length >= this.capacidade) {
            ultima = [];
            this.pilhas.push(ultima);
        }
        ultima.push(x);
    }

    desempilha() {
        while (this.pilhas.length && this.pilhas[this.pilhas.length - 1].length === 0) {
            this.pilhas.pop();
        }
        if (this.pilhas.length === 0) return null;
        return this.pilhas[this.pilhas.length - 1].pop();
    }
}

let pratos = new PilhaDePratos(3);
pratos.empilha(5);
pratos.empilha(10);
pratos.empilha(15);
pratos.empilha(20);
console.log("A:", pratos.desempilha()); 
console.log("B:", pratos.desempilha()); 
