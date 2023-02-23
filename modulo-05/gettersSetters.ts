export {};

// => Exemplo 01: Get
class Quadrado {
  private _largura = 6;
  private _altura = 12;

  get calcularQuadrado() {
    return this._altura * this._largura;
  }
}

console.log(new Quadrado().calcularQuadrado);

// => Exemplo 02: Set
class Pessoa {
  nome: string;

  retornarNomePessoa(setNomePessoa: string) {
    this.nome = setNomePessoa;
  }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('Eduardo Costa');
console.log('Meu nome é ...:', pessoa.nome);

// => Exemplo 03: Get [explicação mais densa]
class Estudante {
  private _nome: 'Eduardo Costa';
  private _semestre: 1;
  private _curso: 'Analise e Desenvolvimento de Sistemas';

  public get nomeEstudante() {
    return this._nome;
  }
}

const estudante = new Estudante();
const resultado = estudante.nomeEstudante;
console.log(resultado);

// => Exemplo 04: Set [explicação mais densa]
class Estudante_01 {
  nome = 'Eduardo Costa';
  semestre = 1;
  curso = 'Analise e Desenvolvimento de Sistemas';

  constructor(
    nomeEstudante: string,
    semestreEstudante: number,
    cursoEstudante: string,
  ) {
    this.nome = nomeEstudante;
    this.semestre = semestreEstudante;
    this.curso = cursoEstudante;
  }

  public get cursos() {
    return this.curso;
  }

  public set cursos(setCurso: string) {
    this.curso = setCurso;
  }
}

const estudante_01 = new Estudante_01('Eduardo Costa', 1, 'ADS');
console.log(estudante_01);

// Setter call
estudante_01.curso = 'Sistemas da Informação';

// Getter call
console.log('Curso atualizado...', estudante_01.cursos);
