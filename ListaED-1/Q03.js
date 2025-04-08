function trocaTopoBase(pilha) {
    if (pilha.length <= 1) return;

    let base = pilha[0];
    let topo = pilha[pilha.length - 1];

    pilha[0] = topo;
    pilha[pilha.length - 1] = base;
}

let p3 = [1, 2, 3, 4, 5]; 
trocaTopoBase(p3);
console.log("Resultado:", p3);
