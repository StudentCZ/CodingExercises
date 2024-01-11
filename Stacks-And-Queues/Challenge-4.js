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

const queue = myQueue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());
console.log(queue.pop());

class MyQueue {
  constructor(enqueue = [], dequeue = []) {
    this.enqueue = enqueue;
    this.dequeue = dequeue;
  }
  push(element) {
    this.enqueue.push(element);
  }
  pop() {
    if (this.dequeue.length === 0) {
      while (this.enqueue.length > 0) {
        this.dequeue.push(this.enqueue.pop());
      }
    }
    if (this.enqueue.length === 0) {
      return undefined;
    }
    return this.dequeue.pop();
  }
}
