interface DadosBancarios {
  conta: number;
  agencia: number;
  banco: string;
}

interface Cliente {
  nome: string;
  email: string;
}

interface DadosPessoaFisica {
  cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
  conta: 123456,
  agencia: 123,
  banco: 'Banco do Brasil',
  nome: 'Eduardo Marques',
  email: 'eduardo@email.com',
  cpf: 123456789,
};

console.log(dadosCliente);
