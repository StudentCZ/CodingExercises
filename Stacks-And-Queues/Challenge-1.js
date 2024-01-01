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

  const inspect = () => ({ array, top });
  return { push, pop, inspect };
};

const stacks = tripleStack(new Array(9));

stacks.push(0, 1);
stacks.push(0, 4);
stacks.push(1, 2);
stacks.push(1, 5);
stacks.push(2, 3);
stacks.push(2, 6);

console.log(stacks.inspect());
