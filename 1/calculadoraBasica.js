calculadoraBasica (num1,num2,operacao) {
      let resultado;
      
    switch (operacao) {
    
        case 'soma':
        resultado = num1 + num2;
        break; 
        // Operação acaba aqui por conta do "break".
    
        case 'subtracao'
        resultado = num1 - num2;
        break;
        // O break sai do switch e da o resultado da função ou o código após.
        case 'multiplicacao'
        resultado = num1 * num2;
        break;
        // O break sai do switch e da o resultado da função ou o código após.
    
        case 'divisao'
        if (num2 === 0) {
            console.log('Erro: Divisão por 0 não é permitida.');
            return;
            // Quando ver um return você não executa o restante do codigo a função acaba no return, ele sai do switch e da função, ele para por completo.
        }
        resultado = num1 / num2;
        break;

        // Se não for nenhuma das operações acima ele imprime um codigo para defeito.
        default: 
        console ('Erro: Operação inválida.')
        return;    
      }
    // Codigo após o switch (resultado da função)
      return resultado;

}

// Para verificar se o código ta correto é so is ao terminal e escrever node .\1\calculadoraBasica.js

console.log(calculadoraBasica,(10, 5, 'soma'));
console.log(calculadoraBasica,(10, 5, 'subtracao'));
console.log(calculadoraBasica,(10, 5, 'mutiplicacao'));
console.log(calculadoraBasica,(10,5 'divisao'));