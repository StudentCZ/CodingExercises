function createMinStack() {
  const stack = [];
  const minStack = [];

  function push(value) {
    stack.push(value);

    if (minStack.length === 0 || value <= minStack[minStack.length - 1]) {
      minStack.push(value);
    }
  }
}
