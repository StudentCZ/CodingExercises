function sortStack(mainStack) {
  const tempStack = [];

  while (mainStack.length > 0) {
    const temp = mainStack.pop();
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      mainStack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  while (tempStack.length > 0) {
    mainStack.push(tempStack.pop());
  }
}

const unsortedStack = [4, 3, 2, 5, 1];
sortStack(unsortedStack);
console.log(unsortedStack);

class SortStack {
  constructor() {
    this.mainStack = [];
    this.tempStack = [];
  }
  sort() {
    while (this.mainStack.length > 0) {
      const temp = this.mainStack.pop();

      while (
        this.tempStack.length > 0 &&
        this.tempStack[this.tempStack.length - 1] > temp
      ) {
        this.mainStack.push(this.tempStack.pop());
      }
    }
    while (this.tempStack.length > 0) {
      this.mainStack.push(this.tempStack.pop());
    }
  }
}
