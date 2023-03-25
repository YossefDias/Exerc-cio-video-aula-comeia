// Exemplo de função comum
function somarNumeros(a, b) {
        return a + b;
}

// Arrow function com chaves
function somarNumeros(a, b) => {
    return a + b;
}

// Arrow function sem chaves
function somarNumeros(a, b) => a + b;

console.log(`Resultado da funcao comum é: ${somarNumeros(2, 3)}`);
console.log(`Resultado da arrow function com chaves é:${somarNumeros(2, b)} `);
console.log(`Resultado da arrow function sem chaves é: ${somarNumeros(2, 3)}`);