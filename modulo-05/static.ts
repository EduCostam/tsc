export {};

// => Exemplo 01: Propriedades Estáticas
class Funcionario {
  static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    // nome classe + nome propriedade
    Funcionario.contratacoes++;
  }
}

const funcionario_01 = new Funcionario('Eduardo', 'Costa', 'Developer');
const funcionario_02 = new Funcionario('Cristiane', 'Marques', 'Auxiliar');
console.log(Funcionario.contratacoes);

// => Exemplo 02: Propriedades estáticas
type Raca = 'Splitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
  public nome: string;
  public idade: number;
  public racas: Raca[];
  public static QTD_CACHORRO_VENDIDO = 0;

  constructor(nome: string, idade: number, racas: Raca[]) {
    this.nome = nome;
    this.idade = idade;
    this.racas = racas;

    Cachorro.QTD_CACHORRO_VENDIDO++;
    console.log(Cachorro.QTD_CACHORRO_VENDIDO);
  }

  public exibirInformacao(): void {
    console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
  }
}

const cachorro_01 = new Cachorro('Pipoca', 4, ['Splitz Alemão']);
const cachorro_02 = new Cachorro('Alface', 8, ['Yorkshire']);

// => Exemplo 03: Métodos estáticos
class Funcionario_01 {
  private static contratacoes = 0;

  constructor(
    private nome: string,
    private sobrenome: string,
    private titulo: string,
  ) {
    // nome classe + nome propriedade
    Funcionario.contratacoes++;
  }

  public static retornarContratacoes() {
    return Funcionario_01.contratacoes;
  }
}

const funcionario_03 = new Funcionario('Eduardo', 'Costa', 'Developer');
const funcionario_04 = new Funcionario('Cristiane', 'Marques', 'Auxiliar');

// nome da Classe + nome do métodos
console.log(Funcionario_01.retornarContratacoes());
