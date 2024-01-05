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
}
