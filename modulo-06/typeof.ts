function detalhesFuncionario(funcionario: string | number) {
  if (typeof funcionario == 'string') {
    return `O nome do funcionário é: ${funcionario}`;
  } else if (typeof funcionario == 'number') {
    return `O id do funcionário é: ${funcionario}`;
  }
}

const func = detalhesFuncionario('Eduardo Marques');
console.log(func);

const func2 = detalhesFuncionario(1);
console.log(func2);
