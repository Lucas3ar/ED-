function removeDuplicados(pilha) {
    let visto = new Set();
    let aux = [];

    while (pilha.length > 0) {
        let topo = pilha.pop();
        if (!visto.has(topo)) {
            visto.add(topo);
            aux.push(topo);
        }
    }

    while (aux.length > 0) {
        pilha.push(aux.pop());
    }

    return pilha;
}

let p7 = [3, 7, 3, 2, 7, 1, 4, 2];
console.log("Q7:", removeDuplicados(p7));
