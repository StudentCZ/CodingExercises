class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedListWithLoop = (values, loopNodeIndex) => {
  let head = new Node(values[0]);
  let current = head;
  let loopNode = null;

  for (let i = 1; i < values.length; i++) {
    let newNode = new Node(values[i]);
    current.next = newNode;
    current = newNode;

    if (i === loopNodeIndex) {
      loopNode = newNode;
    }
  }

  current.next = loopNode;

  return head;
};

// Example usage:
const values = ['A', 'B', 'C', 'D', 'E'];
const head = createLinkedListWithLoop(values, 2);

const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    console.log(`slow: ${slow.val} fast: ${fast.val}`);
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      console.log(`found loop slow: ${slow.val} fast: ${fast.val}`);
      break;
    }
  }
  if (fast === null || fast.next === null) {
    console.log('did not find loop');
    return null;
  }
  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

detectLoop(head);
