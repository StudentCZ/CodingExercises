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
  function min() {
    if (minStack.length === 0) {
      return undefined;
    }
    return minStack[minStack.length - 1];
  }

  return { push, pop, min };
}

const stack = createMinStack();
stack.push(6);
stack.push(3);
stack.push(4);
console.log(stack.min());

class CreateMinStack {
  constructor(stack, minStack) {
    this.stack = stack;
    this.minStack = minStack;
  }
  push(value) {
    stack.push(value);

    if (
      this.minStack.length === 0 ||
      value <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(value);
    }
  }
  pop() {
    if (this.stack.length === 0) {
      return undefined;
    }
    const poppedValue = this.stack.pop();

    if (poppedValue === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return poppedValue;
  }
}
