interface IEndereco {
  rua: string;
  bairro: string;
  cidade: string;
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao: string;
}

type IEnderecoPessoa = IEndereco & IPessoa;
const enderecoPessoa: IEnderecoPessoa = {
  nome: 'Eduardo Marques',
  idade: 25,
  profissao: 'Software Engineer',
  rua: 'Rua 123',
  bairro: 'Bairro segredo',
  cidade: 'Xanxere',
};

console.log(enderecoPessoa);
