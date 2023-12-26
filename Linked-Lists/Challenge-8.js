class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedListWithLoop = (values, loopNodeIndex = 2) => {
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

  if (loopNode !== null) {
    current.next = loopNode;
  }

  return head;
};

const values = ['A', 'B', 'C', 'D', 'E'];
const head = createLinkedListWithLoop(values, 2);

const detectLoop = (head) => {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast === null || fast.next === null) {
    return null;
  }

  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
};

const result = detectLoop(head);

console.log(result);
