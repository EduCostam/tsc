"use strict";
// => Exemplo 01 - Uso simples de Tuplas em Typescript
let pessoa;
pessoa = ['Eduardo Costa', 'Cloud Advocate JavaScript', 25];
// pessoa = [ 25, 'Eduardo Costa', 'Cloud Advocate JavaScript'];
console.log(pessoa);
// => Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
/*pessoa1 = ['Eduardo Costa', 'Cloud Advocate JavaScript', 25];

console.log(pessoa1[1]);*/
// => Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2 = ['Eduardo Costa', 'Cloud Advocate JavaScript', 25];
console.log(pessoa2[1]);
// => Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// => Exemplo 05 - Lista Heterogênea de Tupla:
// => Exemplo 06 - Uso de função com Tuplas
// => Exemplo 07 - Labeled Tuples com Spreed Operator numa função
