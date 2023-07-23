export {};

// Exemplo 01 - Conditional Types

type Pessoa = {
  name: string;
  age: number;
  endereco: string;
};

type Empresa = {
  nome: string;
  cnpj: string;
};

type EnderecoPessoa = {
  enderecoSecundario: string;
  cidade: string;
  pais: string;
}

type EnderecoEmpresa= {
  localização: 'rua' | 'avenida' | 'praça';
};

type EnderecoFinal<T> = T extends { endereco: string } ? EnderecoPessoa : EnderecoEmpresa;

const enderecoPessoa: EnderecoFinal<Pessoa> = {
  enderecoSecundario: 'Rua 2',
    cidade: 'São Paulo',
    pais: 'Brasil',
};

const enderecoEmpresa: EnderecoFinal<Empresa> = {
  localização: 'rua',
};

console.log(enderecoPessoa);
console.log(enderecoEmpresa);

// => Exemplo 02 - Conditional Types ()

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio1: ArquivoAudio = 'mp4';
const arquivoAudio2: ArquivoAudio = 'mp3';

console.log(arquivoAudio1);
console.log(arquivoAudio2);

