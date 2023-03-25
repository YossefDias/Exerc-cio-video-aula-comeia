calculadoraBasica (num1,num2,operacao) {
      let resultado;
      
    switch (operacao) {
    
        case 'soma':
        resultado = num1 + num2;
        break;
    
        case 'subtracao'
        resultado = num1 - num2;
        break;
    
        case 'multiplicacao'
        resultado = num1 * num2;
        break;
    
        case 'divisao'
        if (num2 === 0) {
            console.log('Erro: Divisão por 0 não é permitida.');
            return;
        }
        resultado = num1 / num2;
        break;
        default: 
        console ('Erro: Operação inválida.')
        return;    
      }

      return resultado; 
}

console.log(calculadoraBasica,(10, 5, 'soma'));
console.log(calculadoraBasica,(10, 5, 'subtracao'));
console.log(calculadoraBasica,(10, 5, 'mutiplicacao'));
console.log(calculadoraBasica,(10,5 'divisao'));