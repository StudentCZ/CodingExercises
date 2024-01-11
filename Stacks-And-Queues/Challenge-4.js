// function myQueue() {
//   const stackPush = [];
//   const stackPop = [];
//   function push(element) {
//     stackPush.push(element);
//   }
//   function pop() {
//     if (stackPop.length === 0) {
//       while (stackPush.length > 0) {
//         stackPop.push(stackPush.pop());
//       }
//     }
//     if (stackPop.length === 0) {
//       return undefined;
//     }
//     return stackPop.pop();
//   }
//   return { push, pop };
// }

// const queue = myQueue();
// queue.push(1);
// queue.push(2);
// queue.push(3);
// queue.push(4);
// console.log(queue.pop());
// console.log(queue.pop());

class MyQueue {
  constructor() {
    this.stackPush = [];
    this.stackPop = [];
  }
  push(element) {
    this.stackPush.push(element);
  }
  pop() {
    if (this.stackPop.length === 0) {
      while (this.stackPush.length > 0) {
        this.stackPop.push(this.stackPush.pop());
      }
    }
    if (this.stackPop.length === 0) {
      return undefined;
    }
    return this.stackPop.pop();
  }
}

const queue2 = new MyQueue();
queue2.push(5);
queue2.push(4);
queue2.push(1);
queue2.push(2);
console.log(queue2.pop());
