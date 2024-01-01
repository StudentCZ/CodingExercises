const tripleStack = (array) => {
  const length = Math.floor(array.length / 3);

  const top = [0, length, 2 * length];

  const push = (stackNumber, value) => {
    if (top[stackNumber] < (stackNumber + 1) * length) {
      array[top[stackNumber]] = value;
      top[stackNumber]++;
    } else {
      console.log(`Stack ${stackNumber + 1} is full. Cannot push ${value}.`);
    }
  };
  const pop = (stackNumber) => {
    if (top[stackNumber] > stackNumber * length) {
      const value = array[top[stackNumber]];
      top[stackNumber]--;
      return value;
    } else {
      console.log(`Stack ${stackNumber + 1} is empty. Cannot pop.`);
    }
  };
};
