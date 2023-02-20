// => Exemplo 01 - Classes
export {};

class Pessoa {
  nome: string;
  sobrenome: string;

  constructor(nome: string, sobrenome: string) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  nomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Eduardo', 'Costa');
console.log(pessoa.nomeCompleto());

// => Exemplo 02 - Classes (sem constructor)
class Estudande {
  codigoEstudande: number;
  nomeEstudante: string;
}

// Criar um objeto ou a instancia
const estudante = new Estudande();

// Inicializar o objeto:
estudante.codigoEstudande = 8967;
estudante.nomeEstudante = 'Alface Costa';

// Acessar os campos:
console.log('Código do Estudante...: ' + estudante.codigoEstudande);
console.log('Nome do Estudante...: ' + estudante.nomeEstudante);

// => Exemplo 03 - Classes (com constructor)
class Estudante_1 {
  codigoEstudante: number;
  nomeEstudante: string;

  // Definir o Construtor
  constructor(codigoEstudante: number, nomeEstudante: string) {
    this.codigoEstudante = codigoEstudante;
    this.nomeEstudante = nomeEstudante;
  }

  // Criar o método
  listarEstudante(): void {
    console.log('Códigodo do Estudante...: ' + this.codigoEstudante);
    console.log('Nome do Estudante...: ' + this.nomeEstudante);
  }
}

// Acessar os campos:
const estudante_1 = new Estudante_1(9845, 'Alface Costa');
console.log(
  'Lendo o atributo Código do Estudante...: ' + estudante_1.codigoEstudante,
);
console.log(
  'Lendo o atributo Nome do Estudante...: ' + estudante_1.nomeEstudante,
);
