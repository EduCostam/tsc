exports = {};

// => Exemplo 01 - Interfaces com extends
interface Animal {
  nome: string;
  idade: number;
  porte: string;
}

interface Cachorro extends Animal {
  raca: string;
}

const cachorro: Cachorro = {
  nome: 'Alface',
  idade: 7,
  porte: 'Pequeno-médio',
  raca: 'SRD',
};

console.log(cachorro);

// => Exemplo 02 - Extensão de Múltiplas Interfaces

// => Exemplo 03 - Uso do Omit
