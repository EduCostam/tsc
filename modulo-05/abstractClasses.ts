export {};

abstract class Funcionario {
  constructor(private nome: string, private sobrenome: string) {}

  abstract retornarSalario(): number;
  get retornarNomeCompleto(): string {
    return `${this.nome} ${this.nome}`;
  }

  emitirContratoCheque(): string {
    return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalario}`;
  }
}

class FuncionarioCLT extends Funcionario {
  constructor(nome: string, sobrenome: string, private salario: number) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.salario;
  }
}

class FuncionarioPJ extends Funcionario {
  constructor(
    nome: string,
    sobrenome: string,
    private valorHora: number,
    private horasTrabalhadas: number,
  ) {
    super(nome, sobrenome);
  }

  retornarSalario(): number {
    return this.valorHora * this.horasTrabalhadas;
  }
}

const eduardo = new FuncionarioCLT('Eduardo', 'Costa', 18000);
const joao = new FuncionarioPJ('João', 'Silva', 150, 160);

console.log(eduardo.emitirContratoCheque());
console.log(joao.emitirContratoCheque());

// const funcionario = new Funcionario('Eduardo', 'Costa');
