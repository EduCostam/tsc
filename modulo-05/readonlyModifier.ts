export {};

// => Exemplo 01
class Funcionario {
  readonly dataNascimento: Date;

  constructor() {
    this.dataNascimento = this.dataNascimento;
  }
}

//const funcionario = new Funcionario(new Date(1998, 02, 28));
//funcionario.dataNascimento = new Date(1998, 02, 28);

// => Exemplo 02

class Funcionaro_01 {
  /**
   *
   */
  constructor(readonly dataNascimento: Date) {
    this.dataNascimento = dataNascimento;
  }
}

// => Exemplo 03

class Funcionario_03 {
  nome: string;
  readonly codigoFuncionario: number;

  /**
   *
   */
  constructor(nome: string, codigo: number) {
    this.codigoFuncionario = codigo;
    this.nome = nome;
  }
}

const func = new Funcionario_03('Eduardo', 112233);
func.nome = 'Eduardo Costa';
//func.codigoFuncionario = 113344;

console.log(func);

// => Exemplo 04 - Interface

interface IFuncionario {
  codigoFuncionaro: number;
  nomeEmpregado: string;
}

const funcionario_1: Readonly<IFuncionario> = {
  codigoFuncionaro: 556699,
  nomeEmpregado: 'Eduardo',
};

// funcionario_1.codigoFuncionaro = 887653;
// funcionario_1.nomeEmpregado = 'Costa';

const funcionario_02: IFuncionario = {
  codigoFuncionaro: 506699,
  nomeEmpregado: 'Eduardo',
};

funcionario_02.codigoFuncionaro = 887653;
funcionario_02.nomeEmpregado = 'Costa';
