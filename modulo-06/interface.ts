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

interface Carro {
  readonly modelo: string;
  ano: number;
  valor?: number;
}

const carro: Carro = {
  modelo: 'Fusca',
  ano: 1969,
};

console.log(carro);

// => Exemplo 04: Interface com implements Class

interface IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;
  comer(tipoComida: string): void;
}

class Gato implements IAnimal {
  nome: string;
  idade: number;
  estaVivo: boolean;

  constructor(nome: string, idade: number, estaVivo: boolean) {
    this.nome = nome;
    this.idade = idade;
    this.estaVivo = estaVivo;
  }
  comer(tipoComida: string): void {
    console.log(`O gato ${this.nome} está comendo ${tipoComida}`);
  }
}

const gato = new Gato('Totó', 10, true);
console.log(gato);
gato.comer('Ração');

// => Exemplo 05: Interface vs Alias Type
