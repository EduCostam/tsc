interface Humano {
  falar: () => void;
}

interface Animal {
  voz: () => void;
}

const dizerAlgo = (som: Humano | Animal) => {
  if ('falar' in som) {
    return som.falar();
  }

  return som.voz();
};
