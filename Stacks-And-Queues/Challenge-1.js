const tripleStack = (array) => {
  const length = Math.floor(array.length / 3);

  const firstStack = array.slice(0, length);
  const secondStack = array.slice(length, 2 * length);
  const thirdStack = array.slice(2 * length);
};

const push = (stackNumber, value) => {};

const pop = (stackNumber) => {};
