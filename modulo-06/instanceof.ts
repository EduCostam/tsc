const formatoData = (valor: Date | string) => {
  if (valor instanceof Date) {
    return valor.toUTCString();
  }

  return new Date(valor).toUTCString();
};

console.log(formatoData(new Date('2023-07-16')));
console.log(formatoData('2023-07-16'));
