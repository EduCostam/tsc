exports = {};

// => Exemplo 01 - Interfaces com extends
interface Animal_01 {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro_01 extends Animal_01 {
  raca: string;
}

const cachorro: Cachorro_01 = {
  nome: 'Alface',
  idade: 7,
  porte: 'Pequeno-médio',
  raca: 'SRD',
};

console.log(cachorro);

// => Exemplo 02 - Extensão de Múltiplas Interfaces
interface Cachorro {
  nome: string;
}

interface Gato {
  nome: string;
}

interface Animal extends Cachorro, Gato {
  idade: number;
}

const animal: Animal = {
  nome: 'Farofa',
  idade: 5,
};

console.log(animal);

// => Exemplo 03 - Uso do Omit

interface Funcionario {
  id: number;
  nome: string;
  salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
  id: string;
  salario: string;
  linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
  id: 'js-123',
  nome: 'Eduardo Costa',
  salario: '10K',
  linguagemProgramacao: 'JavaScript',
};

console.log(desenvolvedor);
