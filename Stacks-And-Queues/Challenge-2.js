function createMinStack() {
  const stack = [];
  const minStack = [];

  function push(value) {
    stack.push(value);

    if (minStack.length === 0 || value <= minStack[minStack.length - 1]) {
      minStack.push(value);
    }
  }
  function pop() {
    if (stack.length === 0) {
      return undefined;
    }
    const poppedValue = stack.pop();

    if (poppedValue === minStack[minStack.length - 1]) {
      minStack.pop();
    }
    return poppedValue;
  }
}
