export {};

// Exemplo 01 - Type Casting 'as'

const nome: unknown = 'Eduardo Marques';
console.log((nome as string).toLocaleLowerCase());

// Exemplo 02 - Type Casting '<>'

const carro = 'Corolla';
const tamanhoString: number = (<string>carro).length;
console.log('O tamanho da string é... :', tamanhoString);
