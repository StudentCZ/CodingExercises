// const tripleStack = (array) => {
//   const length = Math.floor(array.length / 3);

//   const top = [0, length, 2 * length];

//   const push = (stackNumber, value) => {
//     if (top[stackNumber] < (stackNumber + 1) * length) {
//       array[top[stackNumber]] = value;
//       top[stackNumber]++;
//     } else {
//       console.log(`Stack ${stackNumber + 1} is full. Cannot push ${value}.`);
//     }
//   };
//   const pop = (stackNumber) => {
//     if (top[stackNumber] > stackNumber * length) {
//       const value = array[top[stackNumber]];
//       top[stackNumber]--;
//       return value;
//     } else {
//       console.log(`Stack ${stackNumber + 1} is empty. Cannot pop.`);
//     }
//   };

//   const inspect = () => ({ array, top });
//   return { push, pop, inspect };
// };

// const stacks = tripleStack(new Array(9));

// stacks.push(0, 1);
// stacks.push(0, 4);
// stacks.push(1, 2);
// stacks.push(1, 5);
// stacks.push(2, 3);
// stacks.push(2, 6);

// console.log(stacks.inspect());

class TripleStack {
  constructor(array) {
    this.length = Math.floor(array.length / 3);
    this.top = [0, this.length, 2 * this.length];
    this.array = array;
  }
  push(stackNumber, value) {
    if (this.top[stackNumber] < (stackNumber + 1) * this.length) {
      this.array[this.top[stackNumber]] = value;
      this.top[stackNumber]++;
    } else {
      console.log(`Stack ${stackNumber + 1} is full. Cannot push ${value}.`);
    }
  }
  pop(stackNumber) {
    if (this.top[stackNumber] > stackNumber * this.length) {
      const value = this.array[this.top[stackNumber]];
      this.top[stackNumber]--;
      return value;
    } else {
      console.log(`Stack ${stackNumber + 1} is empty. Cannot pop.`);
    }
  }
  inspect() {
    return { array: this.array, top: this.top };
  }
}

const stacks = new TripleStack(new Array(9));

stacks.push(0, 1);
stacks.push(1, 2);
stacks.push(2, 3);

console.log(stacks.inspect());
