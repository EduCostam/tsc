// => Exemplo 01: Tipo Unknown
let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

console.log(valorVariavel);

// => Exemplo 02: Erroaotentar atribuir um valor dotipo 'unknown' a outros tipos!
/**let valor: unknown;

let valor1: boolean = valor;
let valor2: any = valor;
let valor3: any[] = valor;
let valor4: string = valor;*/

// => Exemplo 03: Diferença entre :'any' vs 'unknown'
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

console.log(algumaCoisaAny.toFixed());

if (typeof algumaCoisaUnknown == 'number') {
  console.log(algumaCoisaUnknown.toFixed());
}
