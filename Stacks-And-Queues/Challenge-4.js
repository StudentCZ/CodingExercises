function myQueue() {
  const stackPush = [];
  const stackPop = [];
  function push(element) {
    stackPush.push(element);
  }
  function pop() {
    if (stackPop.length === 0) {
      while (stackPush.length > 0) {
        stackPop.push(stackPush.pop());
      }
    }
    if (stackPop.length === 0) {
      return undefined;
    }
    return stackPop.pop();
  }
  return { push, pop };
}
