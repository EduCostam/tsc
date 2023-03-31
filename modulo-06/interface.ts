export {};

// => Exemplo 01: Interface Simples

interface Pessoa {
  nome: string;
  sobrenome: string;
  idade: number;
}

function exibirNome(pessoa: Pessoa) {
  return `
    Nome...: ${pessoa.nome}
    Sobrenome...: ${pessoa.sobrenome}
    Idade...: ${pessoa.idade}
  `;
}

const eduardo = {
  nome: 'Eduardo',
  sobrenome: 'Costa',
  idade: 25,
};

console.log(exibirNome(eduardo));

// => Exemplo 02: Interface com Propriedades Opcionais

interface Livro {
  titulo: string;
  autor: string;
  paginas?: number; // Propriedade opcional
}

const livro: Livro = {
  titulo: 'Clean Code',
  autor: 'Robert C. Martin',
};

console.log(livro);

// => Exemplo 03: Interface com Propriedades de Somente Leitura e Opcionais

// => Exemplo 04: Interface com implements Class

// => Exemplo 05: Interface vs Type Alias
