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
  function display() {
    console.log(stacks);
  }

  return { push, pop, display };
}

const setOfStacks = createSetStack(3);

setOfStacks.push('3');
setOfStacks.push('2');
setOfStacks.push('8');
setOfStacks.push('1');
setOfStacks.push('4');

console.log(setOfStacks.display());

class CreateSetStack {
  constructor(capacity, stacks = [[]]) {
    this.capacity = capacity;
    this.stack = stacks;
  }
  push(value) {
    const currentStack = this.stack[this.stack.length - 1];

    if (currentStack.length < this.capacity) {
      currentStack.push(value);
    } else {
      this.stack.push([value]);
    }
  }
}
