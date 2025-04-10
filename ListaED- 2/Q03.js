class FilaCaminhoneiros {
    constructor(capacidadeMaxima = 10) {
        this.fila = [];
        this.capacidadeMaxima = capacidadeMaxima;
    }

    chegada(nome) {
        if (this.fila.length >= this.capacidadeMaxima) {
            return "Limite diário de carregamento atingido!";
        }
        this.fila.push(nome);
        return `Caminhoneiro ${nome} adicionado à fila.`;
    }

    sair() {
        if (this.fila.length === 0) {
            return "Nenhum caminhoneiro na fila.";
        }
        const nome = this.fila.shift();
        return `Caminhoneiro ${nome} foi carregado.`;
    }

    temAguardando() {
        return this.fila.length > 0;
    }

    atingiuLimite() {
        return this.fila.length >= this.capacidadeMaxima;
    }

    listarFila() {
        return this.fila.length === 0 ? "Fila vazia." : this.fila.join(", ");
    }
}

const sistema = new FilaCaminhoneiros();

console.log(sistema.chegada("João"));
console.log(sistema.chegada("Maria"));
console.log(sistema.chegada("Carlos"));
console.log(sistema.listarFila());
console.log(sistema.temAguardando());
console.log(sistema.atingiuLimite());
console.log(sistema.sair());
console.log(sistema.listarFila());

for (let i = 0; i < 8; i++) {
    sistema.chegada(`Motorista${i}`);
}
console.log(sistema.atingiuLimite());
console.log(sistema.chegada("Excedente"));
