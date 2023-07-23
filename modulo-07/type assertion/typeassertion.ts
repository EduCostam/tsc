export {};

// Exemplo 01 - Type Assertion

function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): number | string {
  const precoComDesconto = preco * (1 - desconto);

  return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}

const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string;
console.log(descontoFinal);

// Exemplo 02 - Type Assertion

/*type Humano = {
  nome: string;
  idade: number;
  idioma: string;
}

const humano = {
  nome: 'José',
  idade: 25,
}

const humano_02: Humano = humano;
console.log(humano_02.nome.toLocaleUpperCase());*/

