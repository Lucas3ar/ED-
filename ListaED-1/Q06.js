function precedencia(op) {
    if (op === '+' || op === '-') return 1;
    if (op === '*' || op === '/') return 2;
    if (op === '^') return 3;
    return 0;
}

function infixaParaRPN(expr) {
    let resultado = '';
    let pilha = [];

    for (let c of expr) {
        if (/[a-z]/i.test(c)) {
            resultado += c;
        } else if (c === '(') {
            pilha.push(c);
        } else if (c === ')') {
            while (pilha.length && pilha[pilha.length - 1] !== '(') {
                resultado += pilha.pop();
            }
            pilha.pop();
        } else {
            while (pilha.length && precedencia(pilha[pilha.length - 1]) >= precedencia(c)) {
                resultado += pilha.pop();
            }
            pilha.push(c);
        }
    }

    while (pilha.length) {
        resultado += pilha.pop();
    }

    return resultado;
}

console.log("Q6:", infixaParaRPN("(a+t)*b+(a+c)")); 
