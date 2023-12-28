const tripleStack = (array) => {
  const length = Math.floor(array.length / 3);

  const top = [0, length, 2 * length];
};

const push = (stackNumber, value) => {
  stackNumber.push(value);
};

const pop = (stackNumber) => {
  stackNumber.pop();
};
