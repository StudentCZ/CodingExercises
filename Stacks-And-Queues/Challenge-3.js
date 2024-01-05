function createSetStack(capacity) {
  const stacks = [[]];

  function push(value) {
    const currentStack = stacks[stacks.length - 1];

    if (currentStack.length < capacity) {
      currentStack.push(value);
    } else {
      stacks.push([value]);
    }
  }
  function pop() {
    const currentStack = stacks[stacks.length - 1];

    if (currentStack.length === 0 && stacks.length > 1) {
      stacks.pop();
    }
    if (stacks.length > 0) {
      return stacks[stacks.length - 1].pop();
    } else {
      return undefined;
    }
  }

  return { push, pop };
}
