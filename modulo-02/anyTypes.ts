// => Exemplo 01: Tipo Any
const a: any = 25;
const b: any = ['Eduardo'];

const result = a + b;
console.log(result);

// => Exemplo 02: Quando o tipo 'any' é inferido implicitamente
/*let frase;
frase = 'Oi, pessoal! Tudo bem?';

console.log(frase);*/

// => Exemplo 03: Quando devemos usar o tipo any?
const formulario: { [campoFormulario: string]: any } = {
  nome: 'Eduardo',
  sobrenome: 'Idade',
  idade: 25,
};

console.log(formulario);
