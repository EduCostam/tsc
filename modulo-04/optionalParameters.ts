export {};

// => Exemplo 01 - Optional Parameter
function informarDadosPessoa(idPessoa: number, nome: string, email?: string) {
  console.log('Id Funcionário ... : ', idPessoa, 'Nome ... : ', nome);

  if (email != undefined) console.log('E-mail ... : ', email);
}

informarDadosPessoa(775544, 'Eduardo Costa');
informarDadosPessoa(994411, 'Usuário teste', 'usuarioteste@example.com');

// => Exemplo 02
function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString();

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar Página');
mensagemLog('Usuário(a) logado(a) com sucesso', 778811);

// => Exemplo 03
type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoa: Pessoa;

pessoa = {
  idFuncionario: 112233,
  nome: 'Eduardo Costa',
};

console.log(pessoa);
