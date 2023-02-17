export {};

// => Exemplo 01 - Uso do switch...case

const numeroMax = 100;
let contador = 100;

if (contador < numeroMax) {
  contador++;
}

console.log(contador);

// => Exemplo 02 - Uso do switch...case

const permissaoIdadeDirigir = 18;

if (permissaoIdadeDirigir >= 18) {
  console.log('Você está habilitado para dirigir!');
}

// => Exemplo 03 - Uso do if-else

const permissaoIdadeDirigir01 = 16;

if (permissaoIdadeDirigir01 >= 18) {
  console.log('Você está habilitado para dirigir!');
} else {
  console.log('Você não tem permissão para dirigir!');
}

// => Exemplo 04 - if ... else if (cálculo IMC - https://www.programasaudefacil.com.br/calculadora-de-imc)

let desconto: number;

let itemContador = 14;

if (itemContador > 0 && itemContador <= 5) {
  desconto = 5;
} else if (itemContador > 5 && itemContador <= 10) {
  desconto = 10;
} else {
  desconto = 15;
}

console.log(`Você teve um desconto de...: ${desconto}% desconto `);

// => Exemplo 05 - Ternário (? :) - if...else

/*const idadeVotacao = 18;

if (idadeVotacao >= 18) {
  console.log('Você é elegível para votar.');
} else {
  console.log('Você não é elegível para votar.');
}*/

// Ternário
const idadeVotacao = 16;

const podeVotar =
  idadeVotacao >= 18
    ? 'Você é elegível para votar.'
    : 'Você não é elegível para votar.';
console.log(podeVotar);
