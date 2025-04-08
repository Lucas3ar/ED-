function bemFormado(seq) {
    let pilha = [];
    for (let c of seq) {
        if (c === '(' || c === '[') {
            pilha.push(c);
        } else if (c === ')' || c === ']') {
            if (pilha.length === 0) return false;
            let topo = pilha.pop();
            if ((c === ')' && topo !== '(') || (c === ']' && topo !== '[')) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

console.log("A:", bemFormado("[(())[()]]("));
console.log("B:", bemFormado("[(( ))]"));
